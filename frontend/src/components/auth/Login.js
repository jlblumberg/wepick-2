import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <BrowserRouter>
        <p id="notregistered">Don't have an account? <Link id="login" to="/login">Log In</Link></p>
      </BrowserRouter>
    </div>
  )
}

export default Login;
