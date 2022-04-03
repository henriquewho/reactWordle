import React from 'react'

function Navbar({navbar}) {
    return (
        <nav className='navbar' id={navbar.id}>{navbar.msg}</nav>
    )
}

export default Navbar