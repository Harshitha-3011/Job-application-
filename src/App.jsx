import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import JobListings from './components/JobListings';
import ApplicationForm from './components/ApplicationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import './App.css';

function PrivateRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem("credentials");
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  const [user, setUser] = useState(localStorage.getItem("credentials"));

  useEffect(() => {
    const handleStorage = () => setUser(localStorage.getItem("credentials"));
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <Router>
      <Header />
      <Nav user={user} />
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/logout" element={<Logout setUser={setUser} />} />
        <Route path="/" element={<PrivateRoute><JobListings /></PrivateRoute>} />
        <Route path="/apply" element={<PrivateRoute><ApplicationForm /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
