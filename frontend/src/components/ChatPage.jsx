import MessageViewer from "./MessageViewer.jsx";
import MessageInput from "./MessageInput.jsx";
import UserInfo from "./UserInfo.jsx";

export default function ChatPage(){


    return <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'grow', width: '100%', marginRight: 50, height: '80%', alignItems: 'center'}}>
        <UserInfo />
        <MessageViewer />
        <MessageInput />
    </div>
}