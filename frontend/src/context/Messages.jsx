import {createContext, useState, useEffect} from 'react'

export const MessagesContext = createContext()

export default function MessagesContextProvider({children}){
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
            body: JSON.stringify({message: newMessage})
        } )
        const fetchedMessage = await fetchedResult.json()
        setMessages(fetchedMessage)
        setNewMessage('')
    }
    
    return <MessagesContext.Provider value={{messages, setMessages, newMessage, setNewMessage, sendMessage}}>
        {children}
    </MessagesContext.Provider>
}
