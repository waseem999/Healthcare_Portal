
import React, { Component } from 'react';
import axios from 'axios';
import store from '../store';
import {connect} from 'react-redux';
import { signIn } from '../actions/users'
import Navbar from '../components/Navbar.jsx';
import Login from '../components/Login.jsx';


class LoginContainer extends Component{

  constructor(props){
      super(props)
      this.state = {
        username: '',
        password: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }

  handleChange(e) {
    this.setState({
        [e.target.id]: e.target.value
      });
  }

  redirectTo(){
    if (this.props.user){
      console.log("user", this.props)
        window.location.href="#pendingapproval"
    }
    else {
        null
    }
}

  handleLogin(e) {
    e.preventDefault();
    this.props.signIn(this.state);
    this.redirectTo();
  }

     render(){
    const username = this.state.username;
    const password = this.state.password;

        return (
        <div>
          <Navbar />
          <Login handleChange={this.handleChange} handleLogin={this.handleLogin}/>
        </div>
        )
  }

}

const mapStateToProps = (state, ownProps) => {
    let user = state.user || {}
    return {
      user
    };
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signIn: function(user){
            dispatch(signIn(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);