import React from 'react'

const Textbox = ({ color, text}) =>{
    console.log(color)
    console.log(text)
    const styleDiv = {
        border: '1px solid black',
    }
    return (
        <div>
            <p>Textだよ！</p>
        </div>
    )
}

export default Textbox