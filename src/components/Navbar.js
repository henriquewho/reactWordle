import React from 'react'

function Navbar({navbar}) {
    return (
        <div className='navbar' id={navbar.id}>{navbar.msg}</div>
    )
}

export default Navbar