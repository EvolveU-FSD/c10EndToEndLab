import express from 'express'
import { getAllMessages } from './data/messages.js'

const app = express()
const port = 3000

app.get('/api', (req,res)=>{
    res.send("hello world")
})

app.get('/api/allMessages', (req,res)=>{
    const allMesaages = getAllMessages()
    res.send(allMesaages)
})

app.listen(port, ()=>{
    console.log('server started on port', port)
})