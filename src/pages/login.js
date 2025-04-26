import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setLoggedIn(true);
      setEmail(''); 
      setPassword(''); 
    } else {
      alert('Please fill in both fields!');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
      {!loggedIn ? (
        <div>
          <h2>Login to Your Profile</h2>
          <form onSubmit={handleLogin} style={{ margin: '20px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                width: '250px',
                marginBottom: '15px',
              }}
            />
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                width: '250px',
                marginBottom: '20px',
              }}
            />
            <br />
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Welcome, {email}!</h2>
          <p>Your profile is successfully created.</p>
          <button
            onClick={() => setLoggedIn(false)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
