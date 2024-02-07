import hashlib

def hash_password(password):
    # Hash the password using SHA-256
    hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()
    return hashed_password

password_to_hash = 'yoursecretpassword'
hashed_password = hash_password(password_to_hash)

print(f"Original Password: {password_to_hash}")
print(f"Hashed Password: {hashed_password}")