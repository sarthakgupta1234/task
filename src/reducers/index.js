import { combineReducers } from 'redux';
import LoginDemoReducer from '../screens/LoginDemo/reducer';

export default combineReducers({
  login_reducer: LoginDemoReducer,
});
