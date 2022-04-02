import React, {useState} from 'react'; 
import './scss/App.scss'; 

function App() {
    const [logged, setLogged] = useState(false); 

    const joinRoom = () => {
        setLogged(true); 
    }

    return (
        <div className='main-app'>
            {
                (logged===false) ? 
                <div className='login-page'>
                    <div className='login-card'>
                        <input type='text' placeholder='name...'></input>
                        <input type='text' placeholder='room name...'></input>
                        <button onClick={joinRoom}>Create or Join a game</button>
                    </div>
                </div>
                : 
                'the game'
            }
        </div>
    )
}

export default App