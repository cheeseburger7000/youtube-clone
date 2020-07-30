// create by rfce
import React from 'react';
import './index.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img 
                    className="header__logo"
                    src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" 
                    alt=""
                />
            </div>

            <div className="header__input">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header_inputButton" />
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon" />
                <NotificationsIcon className="header_icon" />
                <Avatar 
                    alt="Luca Young"
                    src="https://avatars3.githubusercontent.com/u/26396734?s=400&u=3b7dea9302e9f71aa58a16ce290b4d239ed7a3f0&v=4"
                />
            </div>
        </div>
    )
}

export default Header;
