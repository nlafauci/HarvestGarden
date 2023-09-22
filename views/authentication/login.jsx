import React, { useState } from 'react';
const Def = require('../default')

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log("cahnge form login...",value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
  };

  return (
    <Def>
    <div className="login-container">
      <h1>Login</h1>
      <form method='POST' action='/login'>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="login-input"
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="login-input"
        />
        <br />
        <button type="submit" className="login-button">Log In</button>
      </form>
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
    </Def>
  );
}

export default Login;
