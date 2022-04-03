import React, {useContext} from 'react'
import { GameContext } from './Game'

function Key({keyVal, disabled}) {
    const {onDelete, onEnter, onSelectLetter} = useContext(GameContext); 

    const selectLetter = () => {
        if (keyVal==='ENTER') {
            onEnter()
        } else if (keyVal==='DEL') {
            onDelete()
        } else onSelectLetter(keyVal); 
    }

    const keyId = (keyVal==='ENTER' || keyVal==='DEL') ? 'big': disabled ? 'disabled': '';

    return (
        <div className='key' onClick={selectLetter}
        id={keyId}>{keyVal}
        </div>
    )
}

export default Key