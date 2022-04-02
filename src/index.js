/* 
React's new version has depracted the ReactDOM.render() create-react-app still uses. 
The new solution is the createRoot fucntion from react-dom/client, which should work 
like before
*/

import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)