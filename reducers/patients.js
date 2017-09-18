const LOAD_PATIENTS= 'LOAD_PATIENTS';

const initialState = {
  patients: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_PATIENTS: 
       return Object.assign({}, state, { patients: action.patients});
    default: 
       return state;
  }
}
