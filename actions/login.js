import { login, verify } from '../utils/service';

export function userLogin(phone) {
  return {
    type: 'LOGIN',
    payload: {
      promise: login(phone)
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
