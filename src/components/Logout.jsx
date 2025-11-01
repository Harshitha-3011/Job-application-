import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('credentials');
    setUser(null);
    navigate('/login');
  }, [navigate, setUser]);

  return (
    <div className="container">
      <h2>Logged Out</h2>
      <p>You have been successfully logged out.</p>
    </div>
  );
}

export default Logout;
