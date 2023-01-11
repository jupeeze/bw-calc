import React from 'react'
import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import './App.css'

export default function App() {
  const PokemonList: Pokemon = require('../src/PokemonList.json')

  const pokemons = Object.keys(PokemonList)
  pokemons.sort((a, b) => a.localeCompare(b, 'ja'))

  const [atkPok, setAtkPok] = useState<string>('')
  const [atkImg, setAtkImg] = useState<string>('')

  return (
    <div className="App">
      <div>
        <h2>ダメージ計算ツールBW</h2>
        <div className="Container">
          <div className="Box">
            <Autocomplete
              id="combo-box"
              options={pokemons}
              onChange={(_, value) => setAtkImg(PokemonList[value!].sprite)}
              renderInput={(params) => (
                <TextField {...params} label="Attacker" />
              )}
            />
            <img src={atkImg} alt="" />
          </div>
          <div className="Box">
            <Autocomplete
              id="combo-box"
              options={pokemons}
              renderInput={(params) => (
                <TextField {...params} label="Defender" />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
