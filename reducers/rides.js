import { extractErrorMessage } from '../utils/service';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  rides: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RIDES_PENDING':
      return {
        ...state,
        loading: true
      };

    case 'GET_RIDES_REJECTED':
      return {
        ...state,
        loading: false,
        errorMessage: extractErrorMessage(action),
        error: true
      };

    case 'GET_RIDES_FULFILLED':
      return {
        ...state,
        loading: false,
        rides: action.payload.data
      };

    default:
      return state;
  }
};
