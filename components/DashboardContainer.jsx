import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.jsx';

class DashboardContainer extends Component{
constructor(props) {
    super(props);
    this.state = {
      renderPatients: null
    }
  }

  componentWillMount() {
      if (this.props.user.role === "doctor"){
        this.setState({renderPatients: true})
      }
      
    }

    render(){
  
        return (
        <div>
            <div>
                <Navbar/>
                {this.state.renderPatients ? <PatientList /> : <AppointmentView />}
            </div>
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

