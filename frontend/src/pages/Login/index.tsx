import instance from '../../api/axios';
import { useState, useEffect } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [greeting, setGreeting] = useState('');
    const login = async () => {
        try {
            await instance.get('/sanctum/csrf-cookie');
            const response = await instance.post('/api/login', { email, password });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const getGreeting = async () => {
            try {
                const response = await instance.get('/api/greeting');
                setGreeting(response.data.greeting);
            } catch (error) {
                console.error(error);
            }
        }
        getGreeting();
    }, []);

    return (
        <div>
            <h1>Login</h1>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={login}>Login</button>
            <p>{greeting}</p>
        </div>
    );
}

export default Login
