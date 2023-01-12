import React from 'react'
import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import './App.css'

export default function App() {
  const PokemonList: Pokemon = require('../src/PokemonList.json')
  const MoveList: Move = require('../src/MoveList.json')

  const [atkPok, setAtkPok] = useState<string>('ビクティニ')
  const [atkMove, setAtkMove] = useState<string>('Ｖジェネレート')

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

  const OutPutMove = () => {
    const type = MoveList[atkMove].type
    const power = MoveList[atkMove].power
    const damage_class = MoveList[atkMove].damage_class
    return type + ' 威力' + power + ' ' + damage_class
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
            options={Object.keys(PokemonList)}
            defaultValue={'ビクティニ'}
            onChange={(_, value) => setAtkPok(value!)}
            renderInput={(params) => (
              <TextField {...params} label='ポケモン' />
            )}
          />
        </div>
        <div className='ac-wrap'>
          <Autocomplete
            disableClearable
            options={Object.keys(MoveList)}
            defaultValue={'Ｖジェネレート'}
            onChange={(_, value) => setAtkMove(value!)}
            renderInput={(params) => (
              <TextField {...params} label='攻撃技' />
            )}
          />
          <span>{OutPutMove()}</span>
        </div>
      </div>
    </div>
  )
}
