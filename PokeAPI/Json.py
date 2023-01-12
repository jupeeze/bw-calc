import json

file = open('PokeAPI\\MoveList.json', 'r', encoding="utf-8")
data = json.load(file)
file.close()

new_data = {key: val for key, val in data.items() if val['power'] != None}

file = open('PokeAPI\\MoveList.json', 'w', encoding="utf-8")
json.dump(new_data, file, ensure_ascii=False, indent=2)
file.close()
