import React from 'react'
import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import './App.css'

export default function App() {
  const PokemonList: Pokemon = require('../src/PokemonList.json')

  const pokemons = Object.keys(PokemonList)
  pokemons.sort((a, b) => a.localeCompare(b, 'ja'))

  const [atkPok, setAtkPok] = useState<string>('ビクティニ')

  const OutPutTypes = () => {
    if (PokemonList[atkPok].types.length == 2)
      return PokemonList[atkPok].types[0] + ' / ' + PokemonList[atkPok].types[1]
    return PokemonList[atkPok].types
  }

  const OutPutStats = () => {
    let stats = ''
    const HABCDS = 'HABCDS'.split('')
    const atkSta = PokemonList[atkPok].stats;
    for (let index in HABCDS)
      stats += HABCDS[index] + atkSta[index] + ' '
    return stats
  }

  return (
    <div>
      <h2 className='title'>ダメージ計算ツールBW</h2>
      <div className='container'>
        <div className='box'>
          <div className='image-wrap'>
            <img src={PokemonList[atkPok].sprite} />
          </div>
          <div className='text-wrap'>
            <span>{OutPutTypes()}</span>
            <br />
            <span>{OutPutStats()}</span>
          </div>
        </div>
        <hr />
        <div className='ac-wrap'>
          <Autocomplete
            disableClearable
            options={pokemons}
            defaultValue={'ビクティニ'}
            onChange={(_, value) => setAtkPok(value!)}
            renderInput={(params) => (
              <TextField {...params} label='Attacker' />
            )}
          />
        </div>
      </div>
    </div>
  )
}
