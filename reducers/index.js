import { combineReducers } from 'redux';
import signup from './signup';
import login from './login';
import home from './home';

export default combineReducers({
  signup,
  login,
  home
});
