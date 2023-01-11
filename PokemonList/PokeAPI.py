import json

import requests

pokeList = {}
genPokeNum = {1: 1, 2: 152, 3: 252, 4: 387, 5: 494, 6: 650}
typeJP = {"normal": "ノーマル", "fighting": "かくとう", "flying": "ひこう", "poison": "どく", "ground": "じめん", "rock": "いわ", "bug": "むし", "ghost": "ゴースト", "steel": "はがね",
          "fire": "ほのお", "water": "みず", "grass": "くさ", "electric": "でんき", "psychic": "エスパー", "ice": "こおり", "dragon": "ドラゴン", "dark": "あく", "fairy": "フェアリー"}
pokeApiRoute = "https://pokeapi.co/api/v2"

for gen in range(1, len(genPokeNum)):
    for id in range(genPokeNum[gen], genPokeNum[gen+1]):
        print(f"\r\033{id}", end="")

        response = requests.get(f"{pokeApiRoute}/pokemon-species/{id}")
        pokemon_data = response.json()

        name = pokemon_data['names'][0]['name']

        response = requests.get(f"{pokeApiRoute}/pokemon/{id}")
        pokemon_data = response.json()

        sprite = pokemon_data['sprites']['versions'][
            'generation-v']['black-white']['animated']['front_default']
        types = [typeJP[type['type']['name']]
                 for type in pokemon_data['types']]
        stats = [stat['base_stat'] for stat in pokemon_data['stats']]

        dic = {"id": id, "sprite": sprite, "types": types, "stats": stats}
        pokeList[name] = dic

    file = open(f"./gen{gen}.json", "w", encoding="utf-8")
    json.dump(pokeList, file, ensure_ascii=False, indent=2)
    file.close()
