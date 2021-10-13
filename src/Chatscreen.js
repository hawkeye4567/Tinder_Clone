import { Avatar } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./chatscreen.css";
export default function Chatscreen() {
  const [messages, setmessages] = useState([
    {
      name: "Ellen",
      image: "...",
      message: "whats up",
    },
    {
      name: "Ellen",
      image: "...",
      message: "whats up",
    },
    {
      message: "whats up",
    },
  ]);
  const handlesend = (e) => {
    e.preventDefault();
    setmessages([...messages, { message: input }]);
    setInput("");
  };
  const [input, setInput] = useState("");
  return (
    <div className="chatScreen">
      <p className="chatscreen_timestamp">
        you matched with ellen on 12/10/2001
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatscreen_message">
            <Avatar
              className="chatscreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatscreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatscreen_message">
            <p className="chatscreen_textuser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatscreen_input">
        <input
          type="text"
          className="charscreen_in"
          value={input}
          placeholder="enter a message......"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handlesend} className="charscreen_inputbutton">
          SEND
        </button>
      </form>
    </div>
  );
}
