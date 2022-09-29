import React from 'react'
import { signOut } from 'firebase/auth'
import {auth} from './firebase';

const LogoutBtn = () => {
    const logOut = () => {
        signOut(auth);
    }

    return (
    <button onClick={logOut}>Sign out</button>
    )
}

export default LogoutBtn