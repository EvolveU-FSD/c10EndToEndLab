import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserInfo(){
    const userContext = useContext(UserContext)
    const {user, setUser} = userContext
    return <div>
        Your name: 
        <input type="text" value={user} onChange={e=>setUser(e.target.value)} />
    </div>
}