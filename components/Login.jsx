import React from 'react';



const Login = (props) => (
  <div className="container">
    <h2>Healthcare Portal</h2>
    <form className="login-box column" onSubmit={props.handleLogin}>
      <input className="inputField" placeholder="User Name"/>
      <input type="password" className="inputField" placeholder="Password"/>
      <button type="submit" className="login-button">LOGIN</button>
    </form>
  </div>
);

export default Login;