import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import { fetchPatients } from '../actions/patients';

class DashboardContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
        renderPatients: null
        }
    }

  componentWillMount() {
      this.props.fetchPatients();
    }

  

    render(){
        return (
        <div>
            <div>
                <Navbar/>
                
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let user = state.user || {};
    let patients = state.patientlist || {}
    return {
      user, patients
    };
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPatients: function(){
        dispatch(fetchPatients());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

