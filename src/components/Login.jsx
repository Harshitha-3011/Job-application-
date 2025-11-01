import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [creds, setCreds] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem('signupCreds'));
    if (saved && saved.email === creds.email && saved.password === creds.password) {
      localStorage.setItem('credentials', JSON.stringify(creds));
      setUser(JSON.stringify(creds));
      navigate('/');
    } else {
      setError('Invalid credentials or not registered. Please sign up.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={creds.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={creds.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
}

export default Login;
