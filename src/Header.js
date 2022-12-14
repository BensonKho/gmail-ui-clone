import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import GmailLogo from './logo_gmail.png';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TuneIcon from '@mui/icons-material/Tune';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './features/userSlice'
import { auth, provider } from './firebase';

function Header() {

const user = useSelector(selectUser);
const dispatch = useDispatch();

const signOut = () => {
    auth.signOut().then(()=>{
        dispatch(logout());
    });   
};

  return (
    <div className="header">
        <div className="header__left">
            <IconButton>
                <MenuIcon />
            </IconButton>
        <img src={GmailLogo} alt=""/>
        </div>
        <div className="header__middle">
        <IconButton>
            <SearchIcon/>
        </IconButton>    
            <input placeholder="Search in mail" type="text"/>
        <IconButton>    
            <TuneIcon className="header__inputCaret"/>
        </IconButton>    
        </div>
        <div className="header__right">
        <IconButton>
            <HelpOutlineOutlinedIcon/>
        </IconButton>
        <IconButton>
            <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
            <AppsRoundedIcon/>
        </IconButton>
        <IconButton>
            <div class="user__avatar">
                <Avatar onClick={signOut} src={user?.photoUrl}/>
                <p>Log Out</p>
            </div>
        </IconButton> 
        </div>
    </div>
  )
}

export default Header