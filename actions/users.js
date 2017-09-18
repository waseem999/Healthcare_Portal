import axios from 'axios';
const LOAD_USER = 'LOAD_USER';
const USER_ERROR = 'USER_ERROR';

export const loadUser = (user) => {
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

export function signIn(state) {
  let password = state.password;
  let username = state.username;

    return dispatch =>  {
      return axios.post("/api/users", {
          username, password
        })
      .then(response => {
            if(response.data) {
          dispatch(loadUser(response.data))
      
        } else if (response.error){
          dispatch(setUserError(response.error));
        }
      });
    }
}

