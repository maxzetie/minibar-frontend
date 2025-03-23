
import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogin = (jwt) => {
    localStorage.setItem('token', jwt);
    setToken(jwt);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return token ? <Dashboard token={token} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />;
}

export default App;
