import React from 'react'
import LoginBtn from './LoginBtn'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase'
import LogoutBtn from './LogoutBtn';

const Login = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    return (
        <div>
            {user ? <LogoutBtn /> : <LoginBtn />}
        </div>
    )
}

export default Login