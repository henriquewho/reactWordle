import React, {useContext} from 'react'
import {GameContext} from './Game'

function GameOver() {
    const {gameOver, currAttempt, correctWord} = useContext(GameContext) 
    return (
        <div className='gameOver'>
            <h3>
                { gameOver.guessedWord ? "Correctly Guessed" : "Failed"
                }
            </h3>
            <h1>
                Correct: {correctWord}
            </h1>
            {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
        </div>
    )
}

export default GameOver