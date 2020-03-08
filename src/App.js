import React from 'react'
import './App.css'
import useDrumMachine from './components/useDrumMachine'

function App() {
  const { keyArr, beat } = useDrumMachine()
  
  return (
    <div id="drum-machine">
      <h1>Drum Machine</h1>
      <div className="flex-layout">
        <div className="flex-layout__container">
          {keyArr}
        </div>
      </div>
      <p id="display">{beat}</p>
    </div>
  )
}

export default App;
