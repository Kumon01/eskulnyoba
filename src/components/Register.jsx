import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        <form>
          <div className="input-field">
            <label htmlFor="username">
              <img src="img/profil.png" alt="Username Icon" />
            </label>
            <input type="text" id="username" name="username" placeholder="Username" />
          </div>
          <div className="input-field">
            <label htmlFor="email">
              <img src="img/envelope-regular-24 (1).png" alt="Email Icon" />
            </label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">
              <img src="img/lock.png" alt="Password Icon" />
            </label>
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <div className="input-field">
            <label htmlFor="confirmPassword">
              <img src="img/lock.png" alt="Confirm Password Icon" />
            </label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
          </div>
          <div className="actions">
            <Link to="/login">Login</Link>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;