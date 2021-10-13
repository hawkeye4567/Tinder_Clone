import Chat from './Chat'
import React from 'react'
import './chats.css'
import { Link } from '@mui/material'
export default function Chats() {
    return (
        
        <div className="chats">
            <Chat name = "mark" message="how r  u" timestamp="35 min ago" profilePic=""/>
            <Chat name = "mark" message="how r  u" timestamp="35 min ago" profilePic=""/>
        </div>
    )
}
