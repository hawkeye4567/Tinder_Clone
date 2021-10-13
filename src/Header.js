import React from "react";
import "./header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Header(props) {
  return (
    <div className="header"> 
    {props.backbutton?
    <Link to={props.backbutton}>
     <IconButton>
      <ArrowBackIosIcon/>
    </IconButton>
    </Link>:
     <IconButton>
     <PersonIcon className=" header_icon" fontSize="large" />
   </IconButton>
    }
     
      <Link to="/">
      <img
        className="header_logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
        alt=""
      />
      </Link>
      <Link to ="/chat">
      <IconButton>
        <ForumIcon className=" header_icon" fontSize="large" />
      </IconButton>
      </Link>
    </div>
  );
}
