import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Landing() {
  return (
    <div style={{ height: "75vh" }} className="container mt-10 center-align">
      <a 
        href="/signup"
        id="signuptest"
      >
        Signup test
      </a>
      <Link
        id='signup'
        to='/signup'
        style={{
          width: "140px",
          borderRadius: "3px",
          letterSpacing: "1.5px"
        }}
        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      >
        Sign Up
        </Link>
      <Link
        id='login'
        to='/login'
        style={{
          width: "140px",
          borderRadius: "3px",
          letterSpacing: "1.5px"
        }}
        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      >
        Log In
        </Link>
    </div>
  )
}

export default Landing;