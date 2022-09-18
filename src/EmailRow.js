import { Checkbox, IconButton } from '@material-ui/core'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import React from 'react'
import './EmailRow.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({id, title, subject, description, time}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function openMail() {
        dispatch(selectMail({id, title, subject, description, time}));
        navigate("/Mail");
      }

  return (
    <div onClick={openMail} className='emailRow' >
        <div className="emailRow__options">
            <Checkbox/>
            <IconButton>
                <StarBorderOutlinedIcon />
            </IconButton>
        </div>
        <h4 className="emailRow__title">
            {title}
        </h4>
        <div className="emailRow__message">
            <h4>{subject}</h4>
            <span className="emailRow__description">{description}</span>
        </div>
        <p className="emailRow__time">
            {time}
        </p>
    </div>
  )
}

export default EmailRow