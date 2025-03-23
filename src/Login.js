
import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('admin@minibar.app');
  const [password, setPassword] = useState('test1234');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://minibar-api.onrender.com/api/login', { email, password });
      onLogin(res.data.token);
    } catch (err) {
      setError('Login failed. Check credentials.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login to Minibar App</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
