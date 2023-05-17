import './App.css'
import ChatPage from './components/ChatPage'

function App() {


  return (
    <div style={{backgroundColor: 'teal', color: 'darkblue', height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <ChatPage />
    </div>
  )
}

export default App
