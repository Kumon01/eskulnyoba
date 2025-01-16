import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-field">
            <label htmlFor="username">
              <img src="img/profil.png" alt="Username Icon" />
            </label>
            <input type="text" id="username" name="username" placeholder="Username" />
          </div>
          <div className="input-field">
            <label htmlFor="password">
              <img src="img/lock.png" alt="Password Icon" />
            </label>
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <div className="actions">
            <Link to="/register">Belum punya akun?</Link>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;