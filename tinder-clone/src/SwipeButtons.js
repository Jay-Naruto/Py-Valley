import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton"
export default function SwipeButtons() {
    return (
        <div className="swipe__btns">
            <IconButton className="swipe__repeat"  >
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipe__left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipe__star" >
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipe__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipe__lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
            
        </div>
    )
}
