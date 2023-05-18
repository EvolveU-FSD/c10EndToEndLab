import React, { useState, useEffect } from "react";
import MessageViewer from "./MessageViewer";

export default function ChatPage(){


    return <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'grow', width: '100%', marginRight: 50, height: '80%'}}>
        <MessageViewer />
    </div>
}