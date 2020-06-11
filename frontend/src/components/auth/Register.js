import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Register() {
  return(
    <div>
      <BrowserRouter>
        <p id="alreadyregistered">Already have an account? <Link id="login" to="/login">Log In</Link></p>
      </BrowserRouter>
    </div>
  )
}

export default Register;
