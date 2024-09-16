import React, { useState, useCallback} from 'react';
import './panel.css';
import { getAuth, signInWithEmailAndPassword,signOut  } from "firebase/auth";

function AdminPanel() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    const auth = getAuth();

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value)
    }, [setEmail])
    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value)
    }, [setPassword])

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoggedIn(true)
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      signOut(auth).then(() => {
        setIsLoggedIn(false)
      }).catch((error) => {
        // An error happened.
      });
      
      const handleSubmit = (e) => {
          e.preventDefault();
          signInWithEmailAndPassword(auth, email, password);
      };
 
  return (
    
    <div className="adminpanel">
        {IsLoggedIn === true &&
        <h2>
          You have {} unread messages.
        </h2>
      }
      {IsLoggedIn === false &&
        <h2>
            <div className='login'>
                <form onSubmit={handleSubmit}>
            <h1>Admin Panel</h1>
            <input type='text' placeholder='Email' value={email} onChange={handleEmailChange}></input>
            <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} ></input>
            <button type='submit' >Login</button>
            </form>
        </div>
        </h2>
      }

    </div>
  );
}

export default AdminPanel;
