import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Register() {
  return(
    <div>
      <BrowserRouter>
        <p id="alreadyregistered">Already have an account? <Link id="login" to="/login">Log In</Link></p>
      </BrowserRouter>
      <form>
        <div>
          <input id='name'>

          </input>
        </div>
      </form>
    </div>
  )
}

export default Register;
