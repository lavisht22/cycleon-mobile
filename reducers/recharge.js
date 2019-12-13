import { extractErrorMessage } from '../utils/service';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  rechargeDone: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RECHARGE_ACCOUNT_PENDING':
      return {
        ...state,
        loading: true
      };

    case 'RECHARGE_ACCOUNT_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: extractErrorMessage(action)
      };

    case 'RECHARGE_ACCOUNT_FULFILLED':
      return {
        ...state,
        loading: false,
        rechargeDone: true
      };

    case 'RESET_RECHARGE_SCREEN':
      return {
        ...state,
        rechargeDone: false
      };

    default:
      return state;
  }
};
