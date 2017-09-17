const ADD_PATIENTS= 'ADD_PATIENTS';

const initialState = {
  patients: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PATIENTS: 
       return Object.assign({}, state, { patients: action.patients});
    default: 
       return state;
  }
}
