import requests
import json
import os

# Requisição à API
response = requests.get('https://randomuser.me/api/')
data = response.json()

json_path = os.path.join('data', 'data.json')


# Salvar a resposta em um arquivo JSON
with open(json_path, 'w') as f:
    json.dump(data, f)

print(f"Json criado!")