const React = require("react");
const Def = require("../default");
const axios = require("axios");

const Registration = () => {
  return (
    <Def>
      <div className="registration-container">
        <h1>Register</h1>
        <form method="POST" action="/register">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="registration-input"
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="registration-input"
          />

<label htmlFor="password">Password confirm:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="registration-input"
          />
          <br />
          <button type="submit" className="registration-button">
            Register
          </button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </Def>
  );
};

export default Registration;
