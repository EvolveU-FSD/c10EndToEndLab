import {useContext} from 'react'
import { MessagesContext } from '../context/Messages'

export default function MessageViewer(){
    const messagesContext = useContext(MessagesContext)
    const {messages} = messagesContext

    return <div  style={{width: '90%', border: '2px blue solid', margin: '5%', backgroundColor: 'white', textAlign: 'left', padding: 10, flexGrow: 1}}>
        {messages.map((message, id)=><div key={id}>
            <span style={{color: 'teal'}}>{message.user}:</span>{message.message}
        </div>)}
    </div>
}