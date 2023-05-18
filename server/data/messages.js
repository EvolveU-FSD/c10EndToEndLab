const messages = [
    {user: 'Chris', message: "hi"},
    {user: 'Daniel', message: 'well hello'}
]

export function getAllMessages(){
    return messages
}

export function addAMessage(message){
    messages.push(message)
}