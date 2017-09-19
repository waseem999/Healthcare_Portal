import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import { fetchPatients } from '../actions/patients';

class DashboardContainer extends Component{
    constructor(props) {
        super(props);
       
    }

render(){
  console.log("detail props", this.props)
    return (
        <div>
        <Navbar/>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let user = state.user || {};
    let patients = state.patients || {}
    return {
      user, patients, id
    };
}


export default connect(mapStateToProps)(DashboardContainer);