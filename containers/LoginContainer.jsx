
import React, { Component } from 'react';
import axios from 'axios';
import store from '../store';
import {connect} from 'react-redux';
import {loadUser} from '../actions/users'
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
   handleLogin(e) {
    e.preventDefault();
        this.props.loadUser({
          email: this.state.username,
          password: this.state.password
      })
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
        loadUser: function(user){
            dispatch(loadUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);