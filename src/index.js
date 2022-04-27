// import { ThemeProvider } from '@mui/styles';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyA2mgWjIfD2EirtIQj7jd02tjx7CGdIZK4",
  authDomain: "react-learn-93e1d.firebaseapp.com",
  projectId: "react-learn-93e1d",
  storageBucket: "react-learn-93e1d.appspot.com",
  messagingSenderId: "963731123061",
  appId: "1:963731123061:web:0600a40dacd82d68c4813c"
});

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
  if (user) {
    console.log('user true');
    console.log(user);
  } else {
    console.log('user false');
    console.log(user);
  }
});

export const UserContext = createContext(null);

ReactDOM.render(
  <BrowserRouter>
    <UserContext.Provider value={{
      auth
    }}>
      <App />
    </UserContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

