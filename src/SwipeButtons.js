import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
export const SwipeButtons = () => {
  return (
    <div>
      <div className="swipeButtons">
        <IconButton className="repeat">
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="close">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="star">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="favourite">
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="flashon">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};
