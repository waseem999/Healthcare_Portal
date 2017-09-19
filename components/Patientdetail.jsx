import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import { fetchPatients } from '../actions/patients';

class PatientDetail extends Component{
    constructor(props) {
        super(props);
       
    }

render(){
	console.log("patient", this.props.patient)
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
		let patients = state.patients.patients || {}
		let index = patients.findIndex((i) => {
			return i.id === parseInt(id)
		})
		let patient = patients[index];
			return {
				user, patient
			};
}


export default connect(mapStateToProps)(PatientDetail);