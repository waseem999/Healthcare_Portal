import React from 'react';



const Login = (props) => {

  return (
    <div className="container">
      <h2>Healthcare Portal</h2>
      <form className="login-box column" onSubmit={props.handleLogin}>
        <input className="inputField" placeholder="User Name" id="username" onChange={props.handleChange}/>
        <input type="password" className="inputField" placeholder="Password" id="password" onChange={props.handleChange}/>
        <button type="submit" className="login-btn">LOGIN</button>
      </form>
    </div>
  )
};

export default Login;