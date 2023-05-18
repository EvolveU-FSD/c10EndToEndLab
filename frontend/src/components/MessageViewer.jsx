import {useEffect, useState} from 'react'

export default function MessageViewer(){
    const [messages, setMessages] = useState([])
    useEffect(()=>{
        async function loadMessage(){
            const fetchedResult = await fetch('/api/allMessages')
            const fetchedMessage = await fetchedResult.json()
            setMessages(fetchedMessage)
        }
        loadMessage()
    }, [])

    return <div  style={{width: '90%', border: '2px blue solid', margin: '5%', backgroundColor: 'white', textAlign: 'left', padding: 10}}>
        {messages.map((message, id)=><div key={id}>{message}</div>)}
    </div>
}