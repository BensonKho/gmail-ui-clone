import { IconButton , Divider } from '@material-ui/core';
import React from 'react';
import './Mail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useNavigate } from 'react-router-dom';
import { LabelImportant } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function Mail() {

  const selectedMail = useSelector(selectOpenMail);

  const navigate = useNavigate();

  return (
    <div className='mail'>
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon/>
          </IconButton>
          <IconButton>
            <ArchiveOutlinedIcon/>
          </IconButton>
          <IconButton>
            <ReportGmailerrorredIcon/>
          </IconButton>
          <IconButton>
            <DeleteIcon/>
          </IconButton>
          <IconButton>
            <EmailOutlinedIcon/>
          </IconButton>
          <IconButton>
            <AccessTimeIcon/>
          </IconButton>
          <IconButton>
            <AddTaskIcon/>
          </IconButton>
          <IconButton>
            <DriveFileMoveOutlinedIcon/>
          </IconButton>
          <IconButton>
            <LabelOutlinedIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMoreIcon/>
          </IconButton>
          <IconButton>
            <LocalPrintshopOutlinedIcon/>
          </IconButton>
          <IconButton>
            <OpenInNewIcon/>
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className = "mail__important"/>
          <p>{selectedMail.title}</p>
          <p className='mail__time'>{selectedMail.time}</p>
        </div>
        <div className="mail__message">
          <p>{selectedMail?.description}</p> 
        </div>
      </div>
    </div>
  )
}

export default Mail