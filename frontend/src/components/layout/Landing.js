import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Landing() {
  return(
    <div>
      <BrowserRouter>
        <Link 
          id='signup'
          to='/signup'>
          Sign Up
        </Link>
        <Link 
          id='login'
          to='/login'>
          Log In
        </Link>
      </BrowserRouter>
    </div>
  )
}

export default Landing;