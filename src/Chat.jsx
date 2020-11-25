import { useState } from 'react';
const app = () => {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState(["あなた：こんにちは"])
    console.log(messages)
}

const submit = () => {
    setmessages([...messages, input])
    
    console.log(input)
    return (
        <div className='box'>
        <h1>Chat App</h1>
        <div>
    {messages.map((message, index) => <p className="message-box" key={index}>{message}</p>)}
    </div>
    </div>

)
}

export default Chat
