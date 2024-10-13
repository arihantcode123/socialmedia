import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate()
  // const isAdmin=(username,password)=>{
  //   if(username==="tester1" && password==="testing123")return true;
  //   return false;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    if(username==="tester1" && password==="testing123"){
      navigate('/dashboard')
      alert("login successfull");
    }
    else alert("login failed");
    return;
  };

  

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
