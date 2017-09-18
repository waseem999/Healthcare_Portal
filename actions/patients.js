import axios from 'axios';
const LOAD_PATIENTS = 'LOAD_PATIENTS';


export const loadPatients = (patients) => {
    return {
        type: LOAD_PATIENTS, patients
        }
    };

export function fetchPatients() {
      return dispatch =>  {
        return axios.get("/api/patients")
        .then(response => {
            if(response.data) {
            dispatch(loadPatients(response.data))
          } 
				})
				.catch((error)=> console.error(error));
      }
  }