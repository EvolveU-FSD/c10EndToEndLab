import {createContext, useState, useEffect, useContext} from 'react'
import { UserContext } from './UserContext'

export const MessagesContext = createContext()

export default function MessagesContextProvider({children}){
    const userContext = useContext(UserContext)
    const{user} = userContext

    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    useEffect(()=>{
        async function loadMessage(){
            const fetchedResult = await fetch('/api/allMessages')
            const fetchedMessage = await fetchedResult.json()
            setMessages(fetchedMessage)
        }
        loadMessage()
    }, [])

    async function sendMessage(){
        const fetchedResult = await fetch("/api/messages", {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({message: newMessage, user})
        } )
        const fetchedMessage = await fetchedResult.json()
        setMessages(fetchedMessage)
        setNewMessage('')
    }
    
    return <MessagesContext.Provider value={{messages, setMessages, newMessage, setNewMessage, sendMessage}}>
        {children}
    </MessagesContext.Provider>
}