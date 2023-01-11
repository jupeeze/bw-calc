interface Pokemon {
  [key: string]: PokemonPre
}

interface PokemonPre {
  "id": number
  "sprite": string
  "types": string[]
  "stats": number[]
}
