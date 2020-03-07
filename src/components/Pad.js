import React from 'react'
import useDrumMachine from './useDrumMachine'

function Pad() {
    const { keyArr, beat } = useDrumMachine()

    return (
    <div id="display">
        {keyArr}
        <h2>{beat}</h2>
    </div>
    )
}

export default Pad