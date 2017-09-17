import axios from 'axios';
const LOAD_USER = 'LOAD_USER';
const USER_ERROR = 'USER_ERROR';



export const loadUser = (user, role) => {
return {
    type: LOAD_USER, user
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
      return axios.get("/api/users")
      .then(response => {
            if(response.result) {
          dispatch(loadUser(response.result.user))
      
        } else if (response.error){
          dispatch(setUserError(response.error));
        }
      });
    }
}

