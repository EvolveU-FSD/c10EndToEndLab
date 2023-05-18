import {useContext} from 'react'
import { MessagesContext } from '../context/Messages'

export default function MessageInput(){
    const messagesContext = useContext(MessagesContext)
    const {sendMessage, newMessage, setNewMessage} = messagesContext

    return <div>
        <input type='text' value={newMessage} onChange={(e)=>setNewMessage(e.target.value)} 
            style={{height: 35, border: '1px solid blue', backgroundColor: 'white', width: 800, marginRight: 25, color: 'blue'}}
            placeholder='Your message'
        />
        <button onClick={sendMessage}>Send Message</button>
    </div>
}