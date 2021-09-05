import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import Forum from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton"
import tinder from "./tinder-2.svg"
export default function Header() {
    return (
        <div className="header">
            <IconButton>

         
           <PersonIcon fontSize="large" className="header__icons" />
           </IconButton>
           <img 
            className="header__logo"
            src={tinder}
            alt="tinder"
            ></img>
            <IconButton>
            <Forum fontSize="large" className="header__icons"/>
            </IconButton>
           
        </div>
    )
}
