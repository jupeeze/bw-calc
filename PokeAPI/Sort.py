import json

import jaconv

file = open('PokeAPI\\MoveList.json', 'r', encoding="utf-8")
data = json.load(file)
file.close()


def hikaku(a):
    return jaconv.kata2hira(a[0])


sorted_data = sorted(data.items(), key=hikaku)
new_data = dict(sorted_data)

file = open('PokeAPI\\MoveList.json', 'w', encoding="utf-8")
json.dump(new_data, file, ensure_ascii=False, indent=2)
file.close()
