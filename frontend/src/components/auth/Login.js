import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Login() {

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    errors: { email: "", password: "" }
  })

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  return (
    <div>
      <BrowserRouter>
        <p id="notregistered">Don't have an account? <Link id="signup" to="/signup">Sign up</Link></p>
      </BrowserRouter>
      <h1 id="login-title">Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id='email'
            value={formValues.email}
            onChange={onChange}
            type="email"
            errors={formValues.errors.email}
          />
          <label htmlFor="password">Password</label>
          <input
            id='password'
            value={formValues.password}
            onChange={onChange}
            type="password"
            errors={formValues.errors.password}
          />
          <button
            id="log-in"
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;
