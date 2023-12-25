import instance from '../../api/axios';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // Added state for managing modal

    const login = async () => {
        try {
            await instance.get('/sanctum/csrf-cookie');
            const response = await instance.post('/api/login', { email, password });
            console.log(response);
            setIsModalOpen(false); // Close modal after login
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>管理者用ログイン</h1>
            <button onClick={() => setIsModalOpen(true)}>ログイン</button> {/* Button to open modal */}
            <Modal isOpen={isModalOpen}> {/* Use react-modal for modal display */}
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button onClick={login}>Login</button>
                <button onClick={() => setIsModalOpen(false)}>閉じる</button> {/* Button to close modal */}
            </Modal>
        </div>
    );
}

export default Login
