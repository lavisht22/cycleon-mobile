import { extractErrorMessage } from '../utils/service';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  cycles: [],
  booked: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CYCLES_PENDING':
      return {
        ...state,
        loading: true,
        booked: false
      };

    case 'GET_CYCLES_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: extractErrorMessage(action)
      };

    case 'GET_CYCLES_FULFILLED':
      return {
        ...state,
        loading: false,
        cycles: action.payload.data,
        activeCycle: 0
      };

    case 'BOOK_CYCLE_PENDING':
      return {
        ...state,
        loading: true
      };

    case 'BOOK_CYCLE_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: extractErrorMessage(action)
      };

    case 'BOOK_CYCLE_FULFILLED':
      return {
        ...state,
        loading: false,
        booked: true
      };

    case 'RESET_HOME_SCREEN':
      return {
        ...state,
        booked: false
      };

    default:
      return state;
  }
};
