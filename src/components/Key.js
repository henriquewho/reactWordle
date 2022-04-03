import React, {useContext} from 'react'
import { GameContext } from './Game'

function Key({keyVal}) {
    const {onDelete, onEnter, onSelectLetter} = useContext(GameContext); 

    const selectLetter = () => {
        if (keyVal==='ENTER') {
            onEnter()
        } else if (keyVal==='DEL') {
            onDelete()
        } else onSelectLetter(keyVal); 
    }

    return (
        <div className='key' onClick={selectLetter}
        id={(keyVal==='ENTER' || keyVal==='DEL') ? 'big':''}>{keyVal}
        </div>
    )
}

export default Key