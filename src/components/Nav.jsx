import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ user }) {
  return (
    <nav>
      {user ? (
        <>
          <Link to="/">Job Listings</Link>
          <Link to="/apply">Apply</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/logout">Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}

export default Nav;
