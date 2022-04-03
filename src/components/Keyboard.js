import React from 'react'
import Key from './Key';

function Keyboard() {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    return (
        <div className='keyboard'>
            <div className='line1'>
                {keys1.map((each, index) => {
                    return <Key key={index} keyVal={each}/>
                })}
            </div>
            <div className='line2'>
                {keys2.map((each, index) => {
                    return <Key key={index} keyVal={each}/>
                })}
            </div>
            <div className='line3'>
                <Key keyVal={'ENTER'}/>
                {keys3.map((each, index) => {
                    return <Key key={index} keyVal={each}/>
                })}
                <Key keyVal={'DEL'}/>
            </div>
        </div>
    )
}

export default Keyboard