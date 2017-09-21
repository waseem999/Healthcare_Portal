import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import { fetchPatients } from '../actions/patients';
import moment from 'moment';

class PatientDetail extends Component{
    constructor(props) {
        super(props);
       
    }

render(){
  let patient = this.props.patient;

    return (
        <div >
          <Navbar/>
          <div className="container">
          <h3>Patient Information</h3>
          <table className="table-list" width="500">
            <tr><td>Patient Name: </td><td>{patient.firstName} {patient.lastName}</td></tr>
            <tr><td>DOB :</td><td>{patient.DOB}</td></tr>
            <tr><td>Address: </td><td>{patient.address}</td></tr>
            <tr><td>City/State: </td><td>{patient.city} {patient.state} {patient.zip}</td></tr>
            <tr><td>Phone: </td><td>{patient.phone}</td></tr>
          </table>
          <button type="submit" className="appt-btn">See Patient Appointments</button>
          </div>
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