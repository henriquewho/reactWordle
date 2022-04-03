import React, {useContext} from 'react'
import {GameContext} from './Game'


function Letter({letterPos, attemptVal}) {
    const {board} = useContext(GameContext); 
    const letter = board[attemptVal][letterPos]; 

    return (
        <div className='letter'>{letter}</div>
    )
}

export default Letter