import React, {useState, createContext, useEffect} from 'react'
import Board from './Board'
import Keyboard from './Keyboard'
import { boardDefault, generateWordSet } from '../Words';

export const GameContext = createContext(); 

function Game() {
    const [wordSet, setWordSet] = useState(new Set())
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({
        attempt: 0, letterPos: 0
    })
    const correctWord = 'RIGHT'; 
    const [disabledLetters, setDisabledLetters] = useState([]); 

    useEffect(()=>{
        generateWordSet().then(resp => {
            setWordSet(resp.wordSet);
        })
    }, [])

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

        let currWord = ''; 
        for (let i=0; i<5; i++){
            currWord += board[currAttempt.attempt][i]; 
        }
        if (wordSet.has(currWord.toLowerCase())) {
            setCurrAttempt((prev) => {
                return {
                    attempt: prev.attempt+1, letterPos: 0
                }
            })
        } else {
            console.log('word dont exist')
        }

        if (currWord === correctWord) {
            console.log('won'); 
        }

        
    }

    return (
        <div className='game'>
            <GameContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt,
            onSelectLetter, onDelete, onEnter, correctWord, 
            disabledLetters, setDisabledLetters}}>
                <Board /> 
                <Keyboard /> 
            </GameContext.Provider>
        </div>
    )
}

export default Game