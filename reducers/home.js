import { extractErrorMessage } from '../utils/service';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  cycles: [],
  activeCycle: 0,
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
      console.log('REJECTED');
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

    case 'UPDATE_ACTIVE_CYCLE': {
      return {
        ...state,
        activeCycle: action.payload
      };
    }

    default:
      return state;
  }
};
