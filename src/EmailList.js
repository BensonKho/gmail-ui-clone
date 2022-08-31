import React from 'react';
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

function EmailList() {
  return (
    <div className='emailList'>
      <div class="emailList__settings">
        <div class="emailList__settings__left">
          {/* <div class="emailList__select"> */}
          <Checkbox/>
          <IconButton>
            <ArrowDropDownIcon/>
          </IconButton> 
          {/* </div> */}
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div class="emailList__settings__right">
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
      <div class="emailList__sections">
        <Section Icon={InboxIcon} title='Primary' color='blue' selected/>
        <Section Icon={LocalOfferOutlinedIcon} title='Promotions' color='blue' />
        <Section Icon={PeopleAltOutlinedIcon} title='Socials' color='blue' />
      </div>
      <div class="emailList__list">
        <EmailRow/>
      </div>
    </div>  
  )
}

export default EmailList
