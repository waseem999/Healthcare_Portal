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
      this.props.fetchPatients()
    }


render(){
    let patients = this.props.patients.patients;
    return (
        <div>
        <Navbar/>
            <div className="container">
                <div className="table-box">
                <table className="table" width="200">
                    <thead>
                        <tr>
                        <th>Select Patient</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        patients.length && patients.map(patient => (
                            <tr key={patient.id}>
                            <td onClick={() => window.location.href=`/#/patientdetail/${patient.id}`}>
                                <span>{patient.firstName} {patient.lastName}</span>
                            </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("FEKJLEWLKJWEF")
    console.log("State", state)
    let user = state.user || {};
    let patients = state.patients || {}
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

