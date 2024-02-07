from Crypto.PublicKey import RSA


passphrase = 'your passphrase to protect private key'  # Replace with your desired passphrase

key = RSA.generate(2048)
with open('private_key.pem', 'wb') as f:
    f.write(key.export_key('PEM', passphrase=passphrase))

# Save the public key
with open('public_key.pem', 'wb') as f:
    f.write(key.publickey().export_key('PEM'))