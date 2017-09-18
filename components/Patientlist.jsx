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
                <table className="table table" width="647">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        patients.length && patients.map(patient => (
                            <tr key={patient.id}>
                            <td>
                                <span>{patient.firstName}</span>
                            </td>
                            <td>{ patient.firstName }</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
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

