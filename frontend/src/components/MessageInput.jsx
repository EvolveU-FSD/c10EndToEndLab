import {useState} from 'react'

export default function MessageInput(){
    const [newMessage, setNewMessage] = useState('')

    async function sendMessage(){
        await fetch("/api/messages", {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({message: newMessage})
        } )
        setNewMessage('')
    }

    return <div>
        <input type='text' value={newMessage} onChange={(e)=>setNewMessage(e.target.value)} 
            style={{height: 35, border: '1px solid blue', backgroundColor: 'white', width: 800, marginRight: 25, color: 'blue'}}
            placeholder='Your message'
        />
        <button onClick={sendMessage}>Send Message</button>
    </div>
}