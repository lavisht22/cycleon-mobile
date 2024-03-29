import { signup, verify } from '../utils/service';

export function userSignup(name, phone) {
  return {
    type: 'SIGNUP',
    payload: {
      promise: signup(name, phone)
    }
  };
}

export function userVerify(phone, otp) {
  return {
    type: 'VERIFY',
    payload: {
      promise: verify(phone, otp)
    }
  };
}
