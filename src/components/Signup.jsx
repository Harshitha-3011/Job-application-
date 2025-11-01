import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ setUser }) {
  const [creds, setCreds] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!creds.email || !creds.password) {
      setError('Fields required');
      return;
    }
    localStorage.setItem('signupCreds', JSON.stringify(creds));
    localStorage.setItem('credentials', JSON.stringify(creds));
    setUser(JSON.stringify(creds));
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={creds.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={creds.password} onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Signup;
