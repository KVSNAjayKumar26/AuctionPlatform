import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post('http://localhost:8000/', { email, password })
        .then(res => {
            localStorage.setItem('token', res.data.token);
            navigate('/')
        })
        .catch(err => console.log(err));
    }
  return (
    <div>
        <h1>Login</h1>
        <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>

    </div>
  );
};

export default Login;