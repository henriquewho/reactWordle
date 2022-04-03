import React, {useState} from 'react'; 
import './scss/App.scss'; 

import Game from './components/Game';

function App() {
    const [logged, setLogged] = useState(false); 
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')

    const joinRoom = () => {
        if (username.length===0 || room.length===0) {
            alert('Name and Room must be informed');
            return; 
        } else if (username.includes(' ') || room.includes(' ')) {
            alert('Name and Room must not have a space'); 
            return; 
        }
        setLogged(true); 
    }

    return (
        <div className='main-app'>
            {
                (logged===false) ? 
                <div className='login-page'>
                    <h1>Multiplayer Wordle</h1>
                    <div className='login-card'>
                        <input type='text' placeholder='name...' onChange={e=>setUsername(e.target.value)} value={username}></input>
                        <input type='text' placeholder='room name...' onChange={e=>setRoom(e.target.value)} value={room}></input>
                        <button onClick={joinRoom}>Create or Join a game</button>
                    </div>
                </div>
                : 
                <Game />
            }
        </div>
    )
}

export default App