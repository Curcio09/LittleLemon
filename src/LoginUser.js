// LoginUser.js
import React, { useState } from 'react';
import './LoginUser.css'; // Import CSS file

function LoginUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <main className="login-container"> {/* Apply login-container class */}
      <h2>Log In</h2> {/* Apply h2 styling from CSS */}
      <form id="login-form" method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login-username">Username:</label>
          <input
            type="text"
            id="login-username"
            name="username"
            minLength="2"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            minLength="2"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>} {/* Apply p styling from CSS */}
        <button type="submit">Log In</button> {/* Apply button styling from CSS */}
      </form>
    </main>
  );
}

export default LoginUser;