import { createContext, useState } from "react";

export const UserContext = createContext()

export default function UserContextProvider({children}){
    const [user, setUser] = useState('Chris')
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}