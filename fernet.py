from cryptography.fernet import Fernet


key = Fernet.generate_key()
 
# string the key in a file
with open('filekey.key', 'wb') as filekey:
   filekey.write(key)

   