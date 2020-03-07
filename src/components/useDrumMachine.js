import React, { useState, useEffect } from 'react'
import keys from '../keys'

function useDrumMachine() {
    const [beat, setBeat] = useState('Instrument')
    const [idCode, setIdCode] = useState(0)
    const [buttonToggle, setButtonToggle] = useState(false)

    function handlePress(e) {
        const { id } = e.target
        const beatStore = keys.find(buttonItem => buttonItem.keyCode === parseInt(id, 10))
        const getBeat = document.getElementById(beatStore.letter)
        getBeat.play()
        getBeat.currentTime=0
        setBeat(beatStore.name)
    }

    function handleKeydown(e) {        
        const beatPlace = keys.find(keyItem => keyItem.keyCode === e.keyCode)
        if( beatPlace !== undefined ){
            const getBeat = document.getElementById(beatPlace.letter)
            getBeat.play()
            getBeat.currentTime=0
            setBeat(beatPlace.name)
            setIdCode(beatPlace.keyCode)
            setButtonToggle(true)
        }
    }

    function handleKeyup(e) {
        const beatPlace = keys.find(keyItem => keyItem.keyCode === e.keyCode)
        if( beatPlace !== undefined ){
            setButtonToggle(false)
        }
    }

    const keyArr = keys.map(item => {
        return (
            <a key={item.id} 
                name={item.name} 
                id={item.keyCode} 
                onClick={handlePress} 
                className={`drum-pad btn ${buttonToggle && item.keyCode === idCode ? "btn-key" : ""}`}>
              <audio id={item.letter} src={item.sound} className="clip" preload="auto"></audio>
              {item.letter}
            </a>
        )
    })

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown)
        window.addEventListener('keyup', handleKeyup)
        return () => {
            window.removeEventListener('keydown', handleKeydown)
            window.removeEventListener('keyup', handleKeyup)
        }
    }, [])

    return { keyArr, beat }    
}


export default useDrumMachine