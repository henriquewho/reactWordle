import React, {useState, createContext} from 'react'
import Board from './Board'
import Keyboard from './Keyboard'
import { boardDefault } from '../Words';

export const GameContext = createContext(); 

function Game() {
    const [board, setBoard] = useState(boardDefault);

    return (
        <div>
            <GameContext.Provider value={{board, setBoard}}>
                <Board /> 
                <Keyboard /> 
            </GameContext.Provider>
        </div>
    )
}

export default Game