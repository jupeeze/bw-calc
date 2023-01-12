import json

import requests

typeJP = {'normal': 'ノーマル', 'fighting': 'かくとう', 'flying': 'ひこう', 'poison': 'どく', 'ground': 'じめん', 'rock': 'いわ', 'bug': 'むし', 'ghost': 'ゴースト', 'steel': 'はがね',
          'fire': 'ほのお', 'water': 'みず', 'grass': 'くさ', 'electric': 'でんき', 'psychic': 'エスパー', 'ice': 'こおり', 'dragon': 'ドラゴン', 'dark': 'あく', 'fairy': 'フェアリー'}
classJP = {'physical': '物理', 'special': '特殊', }
pokeApiRoute = 'https://pokeapi.co/api/v2/move/'

moveList = {}
for id in range(1, 900+1):
    print(f'\r\033{id}', end='')

    response = requests.get(f'{pokeApiRoute}{id}')
    data = response.json()

    damage_class = data['damage_class']['name']
    if damage_class == 'status':
        continue

    power = data['power']
    name = data['names'][0]['name']
    type = typeJP[data['type']['name']]
    damage_class = classJP[damage_class]

    dic = {'id': id,  'type': type, 'power': power,
           'damage_class': damage_class}
    moveList[name] = dic

file = open(f'./MoveList.json', 'w', encoding='utf-8')
json.dump(moveList, file, ensure_ascii=False, indent=2)
file.close()
