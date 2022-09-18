import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {selectSendMailIsOpen} from './features/mailSlice';
import {login, selectUser} from './features/userSlice';
import { auth, provider } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const sendMessageIsOpen = useSelector(selectSendMailIsOpen);

  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      if(user)
      {
        //if a userslice is currently selected/active remained logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }));
      }
    })
  },[]);

  return (
    <Router>
      {!user ? (<Login/>) : 
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
              <Routes>
                <Route path="/mail" element={<Mail />}/>
                <Route path="/" element={<EmailList />}/>
              </Routes>
          </div>
        {sendMessageIsOpen && <SendMail />}
        </div>
      }
    </Router>
  );
}

export default App;
