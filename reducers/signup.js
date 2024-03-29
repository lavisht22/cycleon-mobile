import { extractErrorMessage } from '../utils/service';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  verification: false,
  verified: false,
  token: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_PENDING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SIGNUP_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: extractErrorMessage(action)
      };
    case 'SIGNUP_FULFILLED':
      return {
        ...state,
        loading: false,
        error: false,
        verification: true
      };
    case 'VERIFY_PENDING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'VERIFY_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: extractErrorMessage(action)
      };
    case 'VERIFY_FULFILLED':
      return {
        ...state,
        loading: false,
        error: false,
        verified: true,
        token: action.payload.data.token
      };

    default:
      return state;
  }
};
