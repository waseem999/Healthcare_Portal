import axios from 'axios';


export const loadUser = (user, role) => {
return {
    type: LOAD_USER, user, role
    }
};

export const setUserError = (error) => {
  return { 
    type: USER_ERROR, 
    error 
  };
}

export function signIn(username, password) {
      return dispatch =>  {
      return axios.get("/api/payments")
      .then(response => {
            if(response.result) {
          dispatch(loadUser(response.result.user, resonse.result.role))
      
        } else if (response.error){
          dispatch(setUserError(response.error));
        }
      });
    }
}

