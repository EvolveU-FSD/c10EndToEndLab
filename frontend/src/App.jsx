import './App.css'
import ChatPage from './components/ChatPage'
import MessagesContextProvider from './context/Messages'
import UserContextProvider from './context/UserContext'
function App() {


  return (
    <div style={{backgroundColor: 'teal', color: 'darkblue', height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <UserContextProvider>
        <MessagesContextProvider>
          <ChatPage />
        </MessagesContextProvider>
      </UserContextProvider>
    </div>
  )
}

export default App
