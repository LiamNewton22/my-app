import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './Assets/Our_Meat_Logo.png'; // Adjust the path based on your actual file location

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login successful, navigate to HomeAdminPage
                navigate('/HomeAdminPage');
            } else {
                // Login failed
                setLoginMessage('Unsuccessful login');
            }
        } catch (error) {
            console.error('Error:', error);
            setLoginMessage('Unsuccessful login');
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="Company Logo" className="company-logo" />
                <h1>Welcome to Our Meat Page</h1>
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    {loginMessage && <p>{loginMessage}</p>}
                </div>
            </header>
        </div>
    );
}

export default Login;
