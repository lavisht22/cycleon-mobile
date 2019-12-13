import { combineReducers } from 'redux';
import signup from './signup';
import login from './login';
import home from './home';
import recharge from './recharge';
import starter from './starter';

export default combineReducers({
  signup,
  login,
  home,
  recharge,
  starter
});
