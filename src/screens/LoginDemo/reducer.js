const INITIAL_STATE = {
    user_name : "",
    password : "",

    userid: '',
    lead: {
      
    }
  };
  
  export default (state = INITIAL_STATE, action) => {
  
    switch (action.type) {
  
        case 'login_field_change':
            return {...state, [action.payload.prop] : action.payload.value };
            break;
  
      default:
        return state;
  
    }
  
  };