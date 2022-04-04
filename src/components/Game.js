import React, {useState, createContext, useEffect} from 'react'
import Board from './Board'
import Keyboard from './Keyboard'
import { boardDefault } from '../util/Words';
import GameOver from './GameOver';
import Navbar from './Navbar';

export const GameContext = createContext(); 

function Game({username, wordSet, correctWord, socket, setCorrectWord, room}) {
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({
        attempt: 0, letterPos: 0
    }); 
    const [disabledLetters, setDisabledLetters] = useState([]); 
    const [gameOver, setGameOver] = useState({
        gameOver: false, guessedWord: false
    }); 
    const [navbar, setNavbar] = useState({
        msg: 'Waiting for the other player to join...', id: 'navbar-invalid', state: 'wait-join'
    })

    /* This useEffect runs every time the socket is changed, IOW, when a message is sent or 
    received via the backend configured for the variable 'socket'.
    */
    useEffect(()=>{
        /* This message is sent BY THE SERVER when / if:  
        - A player logged in, and it's the second player who logged. */
        socket.on('receiveOtherPlayer', (data)=>{
            socket.emit('setCorrectWord', {
                correctWord, room, username
            })
            setNavbar({
                msg: `${data.username} joined, you can guess now!`, id: 'navbar-login', state: 'play'
            })
        })

        /* Only the player1 will get the 'receiveOtherPlayer' message. When it happens, player1 will
        send the correct word to the backend, which will send it to the event below, so that player2 can
        play on the same word as player1. 
        */
        socket.on('setCorrectWord', (data)=>{
            setCorrectWord(data.correctWord); 
            setNavbar({
                msg: `Waiting for ${data.username} to play...`, id: 'navbar-invalid', state: 'wait-play'
            })
        })
    }, [socket])

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
            setNavbar({
                msg: 'Invalid word!', id: 'navbar-invalid'
            })
            return; 
        }

        if (currWord === correctWord) {
            setGameOver({
                gameOver: true, guessedWord: true
            })
            return; 
        }
        if (currAttempt.attempt === 5) {
            setGameOver({
                gameOver: true, guessedWord: false
            })
        }
    }

    return (
        <div className='game'>
            <GameContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt,
            onSelectLetter, onDelete, onEnter, correctWord, 
            disabledLetters, setDisabledLetters, gameOver, setGameOver}}>
                <Navbar navbar={navbar}/>
                <Board /> 
                {
                    (gameOver.gameOver) ?
                    <GameOver /> : <Keyboard />
                }
            </GameContext.Provider>
        </div>
    )
}

export default Game