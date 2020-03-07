import React from 'react'
import './App.css'
import useDrumMachine from './components/useDrumMachine'

function App() {
  const { keyArr, beat } = useDrumMachine()
  
  return (
    <div id="drum-machine">
      {keyArr}
      <p id="display">{beat}</p>
    </div>
  )
}

export default App;
