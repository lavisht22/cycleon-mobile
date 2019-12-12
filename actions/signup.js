import { signup } from '../utils/service';

export default function userSignup(name, phone) {
  return {
    type: 'SIGNUP',
    payload: signup(name, phone)
  };
}
