import * as React from 'react'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div>
        <h2>ダメージ計算ツールBW</h2>
        <div className="Container">
          <div className="Box">
            <Autocomplete
              id="combo-box"
              options={pokemons}
              renderInput={(params) => (
                <TextField {...params} label="Attacker" />
              )}
            />
          </div>
          <div className="Box">
            <Autocomplete
              id="combo-box"
              options={pokemons}
              renderInput={(params) => (
                <TextField {...params} label="Attacker" />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const pokemons = [
  { label: 'ジャローダ' },
  { label: 'エンブオー' },
  { label: 'ダイケンキ' },
]
