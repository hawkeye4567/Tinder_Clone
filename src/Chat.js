import React from "react";
import { Avatar } from "@mui/material";
import "./chat.css";
import { Link } from "react-router-dom";
export default function chat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat_image" alg={name} src={profilePic} />
        <div className="chat_details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat_tsp">{timestamp}</p>
      </div>
    </Link>
  );
}
