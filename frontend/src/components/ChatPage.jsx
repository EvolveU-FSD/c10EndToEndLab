import React, { useState, useEffect } from "react";


export default function ChatPage(){
    const [message, setMessage] = useState('')
    useEffect(()=>{
        async function loadMessage(){
            const fetchedResult = await fetch('/api')
            console.log(fetchedResult)
            const fetchedMessage = await fetchedResult.text()
            setMessage(fetchedMessage)
        }
        loadMessage()
    }, [])

    return <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'grow', width: '100%', marginRight: 50, height: '80%'}}>
        {message}
    </div>
}