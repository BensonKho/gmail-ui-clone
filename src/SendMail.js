import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import { query, collection, doc, onSnapshot, addDoc, serverTimestamp, orderBy} from "firebase/firestore"; 

function SendMail() {

    const dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const dbRef = collection(db, "emails");

    const onSubmit = (formData) => {
        console.log(formData);
        //every time we submit/send a mail, we psuh the data to the db
        addDoc(dbRef, 
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: serverTimestamp()
            });

        //we will close the compose pop-up on send
        dispatch(closeSendMessage());
    }

  return (
    <div className = "sendMail">
        <div className="sendMail__header">
            <h5>New Message</h5>
            <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                name='to' 
                placeholder="To"
                type="email" 
                {...register('to', { required: true})}/>
                {errors.to && <p className="sendMail__error">To is required</p>}
            <input 
                name='subject' 
                placeholder="Subject" 
                type="text" 
                {...register('subject', { required: true})}/>
            {errors.subject && <p className="sendMail__error">Subject is required</p>}
            <input 
                name='message' 
                placeholder="Compose Email" 
                type="text" 
                className = "sendMail__message"
                {...register('message', { required: true})}/> 
            {errors.message && <p className="sendMail__error">Message is required</p>}
            <div className="sendMail__options">
                <Button className="sendMail__button"
                        variant="contained"
                        color="primary"
                        type="submit">Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail