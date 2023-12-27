import instance from '../../features/api/axios';
import { useState, useEffect } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            await instance.get('/sanctum/csrf-cookie');
            const response = await instance.post('/api/login', { email, password });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="flex items-center justify-center h-full">
                <div className="">
                    <p className='text-center'>管理者用ログインページ</p>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-10" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-5" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block" onClick={login}>Login</button>
                </div>
            </div>
        </>
    );
}

export default Login;
