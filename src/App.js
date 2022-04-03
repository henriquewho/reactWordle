import React, {useState} from 'react'; 
import './scss/App.scss'; 
import io from 'socket.io-client'
import { generateWordSet } from './util/Words';

import Game from './components/Game';

//const socket = io.connect("https://radiant-inlet-61531.herokuapp.com/"); 
const socket = io.connect("http://localhost:3004"); 

function App() {
    const [logged, setLogged] = useState(false); 
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')

    const [wordSet, setWordSet] = useState(new Set()); 
    const [correctWord, setCorrectWord] = useState('');

    const joinRoom = () => {
        if (username.length===0 || room.length===0) {
            alert('Name and Room must be informed');
            return; 
        } else if (username.includes(' ') || room.includes(' ')) {
            alert('Name and Room must not have a space'); 
            return; 
        } else {
            generateWordSet().then(resp => {
                setWordSet(resp.wordSet);
                setCorrectWord(resp.todaysWord.toUpperCase());
                socket.emit('join', {room, word: resp.todaysWord.toUpperCase()}); 
                setLogged(true); 
                console.log('todays word: ', resp.todaysWord)
            })
        }
    }

    return (
        <>
        <div className='main-app'>
            {
                (logged===false) ? 
                <div>
                    <nav>Multiplayer Wordle</nav>
                    <div className='login-page'>
                        <div className='login-card'>
                            <input type='text' placeholder='name...' onChange={e=>setUsername(e.target.value)} value={username}></input>
                            <input type='text' placeholder='room name...' onChange={e=>setRoom(e.target.value)} value={room}></input>
                            <button onClick={joinRoom}>Create or Join a game</button>
                        </div>
                    </div>
                </div>
                : 
                <Game wordSet={wordSet} correctWord={correctWord}/>
            }
        </div>
        </>
    )
}

export default App