import React, { useEffect, useState } from 'react';
import './EmailList.css';
import Section from './Section';
import EmailRow from './EmailRow';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { collection, onSnapshot, orderBy , query } from 'firebase/firestore';
import { db } from './firebase';

function EmailList() {

  const [emails, setEmails] = useState([]);

  const dbRef = collection(db, "emails");

  //useEffect when called without a secondary parameter, basically runs the piece of code(function) every time the component re-renders
  //But when we pass with a [] parameter, run a piece of code once when the component loads
  //and if we pass a dependency parameter, it runs the code once when it loads and also when it changes a variable inside
  useEffect(()=>{
      const q = query(dbRef, orderBy("timestamp", "desc"));

      onSnapshot(q, (snapshot) => {
        setEmails(
          snapshot.docs.map((doc)=>({id: doc.id, data: doc.data()}))
        )
      });
  },[]);

  return (
    <div className='emailList'>
      <div className="emailList__settings">
        <div className="emailList__settings__left">
          <Checkbox/>
          <IconButton>
            <ArrowDropDownIcon/>
          </IconButton> 
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settings__right">
          <IconButton>
            <ChevronLeftIcon/>
          </IconButton>
          <IconButton>
            <ChevronRightIcon/>
          </IconButton>
          <IconButton>
            <KeyboardIcon/>
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon/>
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title='Primary' color='blue' selected/>
        <Section Icon={LocalOfferOutlinedIcon} title='Promotions' color='blue' />
        <Section Icon={PeopleAltOutlinedIcon} title='Socials' color='blue' />
      </div>
      <div className="emailList__list">
        {emails.map(({id, data: { to , subject, message, timestamp}}) => (
          <EmailRow 
            id={id} 
            key={id} 
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}/>
        ))}
      </div>
    </div>  
  )
}

export default EmailList
