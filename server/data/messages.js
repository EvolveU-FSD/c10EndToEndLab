const messages = [
    "one",
    "two"
]

export function getAllMessages(){
    return messages
}

export function addAMessage(message){
    messages.push(message)
}