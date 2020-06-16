import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Register() {

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: { name: ""}
  })

  const onChange = (e) => {
    setFormValues(...formValues, {[e.target.id]: e.target.value})
  }

  return(
    <div>
      <BrowserRouter>
        <p id="alreadyregistered">Already have an account? <Link id="login" to="/login">Log In</Link></p>
      </BrowserRouter>
      <form>
        <div>
          <input 
            id='name'
            value={formValues.name}
            onChange={onChange}
            type="email"
            errors={formValues.errors.name}
          >

          </input>
        </div>
      </form>
    </div>
  )
}

export default Register;
