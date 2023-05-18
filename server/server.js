import express from 'express'
import { getAllMessages, addAMessage } from './data/messages.js'

const app = express()
const port = 3000
app.use(express.json())

app.get('/api', (req,res)=>{
    res.send("hello world")
})

app.get('/api/allMessages', (req,res)=>{
    const allMesaages = getAllMessages()
    res.send(allMesaages)
})

app.post('/api/messages', (req, res)=>{
    const message = req.body.message
    const user = req.body.user
    addAMessage({message, user})
    res.send(getAllMessages())
})

app.listen(port, ()=>{
    console.log('server started on port', port)
})