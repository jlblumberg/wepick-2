import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Register() {

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: { name: "", email: "", password: "", password2: ""}
  })

  const onChange = (e) => {
    setFormValues({...formValues, [e.target.id]: e.target.value})
  }

  return(
    <div>
      <BrowserRouter>
        <p id="alreadyregistered">Already have an account? <Link id="login" to="/login">Log In</Link></p>
      </BrowserRouter>
      <form>
        <div>
        <label htmlFor="name">Name</label>
        <input 
          id='name'
          value={formValues.name}
          onChange={onChange}
          type="name"
          errors={formValues.errors.name}
        />
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
        <label htmlFor="password2">Confirm Password</label> 
        <input 
          id='password2'
          value={formValues.password2}
          onChange={onChange}
          type="password2"
          errors={formValues.errors.password2}
        />
        </div>
      </form>
    </div>
  )
}

export default Register;
