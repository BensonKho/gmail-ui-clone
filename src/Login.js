import React from 'react';
import './Login.css';
import GmailLogo from './gmail_logo_login.jpg';
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { login } from './features/userSlice'

function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className = "login">
        <div className="login__container">
            <img src={GmailLogo} alt=""/>
            <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login