
import React, { Component } from 'react';
import axios from 'axios';
import store from '../store';
import {connect} from 'react-redux';
import { signIn } from '../actions/users';
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


componentWillReceiveProps(nextProps){
 
  if (nextProps.user && nextProps.user.user.role){
    if (nextProps.user.user.role === "doctor"){
      console.log("this props user role", this.props.user)
      window.location.href="#patientlist"
    }
    else if (nextProps.user.user.role === "patient"){
      window.location.href="#appointments"
    }
  }
}

  handleChange(e) {
    this.setState({
        [e.target.id]: e.target.value
      });
  }


  handleLogin(e) {
    e.preventDefault();
    this.props.signIn(this.state);
   
  
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