import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import './Sidebar.css';
import SidebarOption from './SidebarOptions';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Sidebar() {

const [active, setActive] = useState(false);  

const handleToggle = () => setActive(!active);

  return (
    <div className="sidebar">
        <Button className="sidebar__compose" startIcon={<CreateOutlinedIcon/>}>
            <h4>Compose</h4>
        </Button>
        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
        <SidebarOption Icon={StarBorderIcon} title="Starred" number={54} />
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
        <SidebarOption Icon={SendOutlinedIcon} title="Sent" number={54} />
        <SidebarOption Icon={InsertDriveFileOutlinedIcon} title="Drafts" number={54} />
        <div className={active ? "sidebar__moreOptions__expand" : "sidebar__moreOptions"}>
          <div className="more__enclosure" onClick={handleToggle}>
          <SidebarOption Icon={active ? ExpandLessIcon : ExpandMoreIcon} title="More" number={54}/>
          </div>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={0} label="moreOption"/>
            <SidebarOption Icon={ChatOutlinedIcon} title="Chats" number={0} label="moreOption"/>
            <SidebarOption Icon={ScheduleSendOutlinedIcon} title="Scheduled" number={0} label="moreOption"/>
            <SidebarOption Icon={EmailOutlinedIcon} title="All Mail" number={0} label="moreOption"/>
            <SidebarOption Icon={ReportOutlinedIcon} title="Spam" number={0} label="moreOption"/>
            <SidebarOption Icon={DeleteOutlineOutlinedIcon} title="Trash" number={0} label="moreOption"/>
        </div>
       
    </div>
  )
}

export default Sidebar