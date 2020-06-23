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
        </div>
      </form>
    </div>
  )
}

export default Login;
