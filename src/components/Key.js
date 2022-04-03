import React from 'react'

function Key({keyVal}) {
    return (
        <div className='key' id={(keyVal==='ENTER' || keyVal==='DEL') ? 'big':''}>{keyVal}</div>
    )
}

export default Key