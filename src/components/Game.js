import React, {useState, createContext} from 'react'
import Board from './Board'
import Keyboard from './Keyboard'
import { boardDefault } from '../Words';

export const GameContext = createContext(); 

function Game() {
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({
        attempt: 0, letterPos: 0
    })

    const onSelectLetter = (keyVal) => {
        if (currAttempt.letterPos > 4) return; 
        const newBoard = [...board]; 
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal; 
        setBoard(newBoard)
        setCurrAttempt((prev) => {
            return {
                ...prev, letterPos: prev.letterPos+1
            }
        })
    }
    
    const onDelete = () => {
        if (currAttempt.letterPos === 0) return; 
        const newBoard = [...board]; 
        newBoard[currAttempt.attempt][currAttempt.letterPos-1] = ""; 
        setBoard(newBoard)
        setCurrAttempt((prev) => {
            return {
                ...prev, letterPos: prev.letterPos-1
            }
        })
    }

    const onEnter = () => {
        if (currAttempt.letterPos !== 5) return; 
        setCurrAttempt((prev) => {
            return {
                attempt: prev.attempt+1, letterPos: 0
            }
        })
    }

    return (
        <div className='game'>
            <GameContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt,
            onSelectLetter, onDelete, onEnter}}>
                <Board /> 
                <Keyboard /> 
            </GameContext.Provider>
        </div>
    )
}

export default Game