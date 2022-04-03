import React, {useEffect, useCallback, useContext} from 'react'
import Key from './Key';
import {GameContext} from './Game'

function Keyboard() {
    const {onEnter, onDelete, onSelectLetter, 
    disabledLetters} = useContext(GameContext); 

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const handleKeyboard = useCallback(e=>{
        if (e.key==='Enter') {
            onEnter(); 
        } else if (e.key === 'Backspace') {
            onDelete(); 
        } else {
            const allKeys = [...keys1, ...keys2, ...keys3]; 
            allKeys.forEach (each=>{
                if (e.key.toUpperCase() === each) onSelectLetter(each); 
            })
        }
    })

    useEffect (()=>{
        document.addEventListener('keydown', handleKeyboard)

        return ()=>{
            document.removeEventListener('keydown', handleKeyboard)
        }
    }, [handleKeyboard])

    return (
        <div className='keyboard' onKeyDown={handleKeyboard}>
            <div className='line1'>
                {keys1.map((each, index) => {
                    return <Key key={index} keyVal={each}
                    disabled={disabledLetters.includes(each)}/>
                })}
            </div>
            <div className='line2'>
                {keys2.map((each, index) => {
                    return <Key key={index} keyVal={each}
                    disabled={disabledLetters.includes(each)}/>
                })}
            </div>
            <div className='line3'>
                <Key keyVal={'ENTER'}/>
                {keys3.map((each, index) => {
                    return <Key key={index} keyVal={each}
                    disabled={disabledLetters.includes(each)}/>
                })}
                <Key keyVal={'DEL'}/>
            </div>
        </div>
    )
}

export default Keyboard