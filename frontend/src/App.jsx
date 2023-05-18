import './App.css'
import ChatPage from './components/ChatPage'
import MessagesContextProvider from './context/Messages'

function App() {


  return (
    <div style={{backgroundColor: 'teal', color: 'darkblue', height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <MessagesContextProvider>
        <ChatPage />
      </MessagesContextProvider>
    </div>
  )
}

export default App
