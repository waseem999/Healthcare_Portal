const LOAD_USER = 'LOAD_USER';
const USER_ERROR = 'USER_ERROR';


export default function user (state = {}, action) {
  
  switch (action.type) {
    case LOAD_USER: 
       return Object.assign({}, state, { user: action.user});
    
    case USER_ERROR:
      return Object.assign({}, state, { user: action.error});

    default: 
       return state;
  }
}