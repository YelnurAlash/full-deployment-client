import React from 'react'
import {auth} from './firebase';
import {signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';

const LoginBtn = () => {
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

  return (
    <button onClick={signIn}>SignIn</button>
  )
}

export default LoginBtn