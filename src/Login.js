import React, {useState} from 'react'
import LoginBtn from './LoginBtn'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase'
import LogoutBtn from './LogoutBtn';

const Login = () => {
    const [username, setUsername] = useState('');
    const [user] = useAuthState(auth);
    console.log(user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/', {
            method: 'POST',
            body: new FormData(e.target)
        })
    }

    return (
        <div>
            {user ? <LogoutBtn /> : <LoginBtn />}
            <form onSubmit={handleSubmit}>
                <input onChange={e => setUsername(e.target.value)} name='username'/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login