interface Pokemon {
  [key: string]: {
    "id": number
    "sprite": string
    "types": string[]
    "stats": number[]
  }
}

interface Move {
  [key: string]: {
    "id": number
    "type": string
    "power": number
    "damage_class": string
  }
}
