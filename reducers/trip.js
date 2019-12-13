import { extractErrorMessage } from '../utils/service';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  activeTrip: {},
  tripEnded: false,
  locked: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ACTIVE_TRIP_PENDING':
      return {
        ...state,
        loading: true
      };

    case 'GET_ACTIVE_TRIP_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: extractErrorMessage(action)
      };

    case 'GET_ACTIVE_TRIP_FULFILLED':
      return {
        ...state,
        loading: false,
        activeTrip: action.payload.data
      };

    case 'LOCK_CYCLE_PENDING':
      return {
        ...state,
        loading: true
      };

    case 'LOCK_CYCLE_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: extractErrorMessage(action)
      };

    case 'LOCK_CYCLE_FULFILLED':
      return {
        ...state,
        loading: false,
        locked: true
      };

    case 'UNLOCK_CYCLE_PENDING':
      return {
        ...state,
        loading: true
      };

    case 'UNLOCK_CYCLE_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: extractErrorMessage(action)
      };

    case 'UNLOCK_CYCLE_FULFILLED':
      return {
        ...state,
        loading: false,
        locked: false
      };

    case 'END_TRIP_PENDING':
      return {
        ...state,
        loading: true
      };

    case 'END_TRIP_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: extractErrorMessage(action)
      };

    case 'END_TRIP_FULFILLED':
      return {
        ...state,
        loading: false,
        tripEnded: true
      };

    case 'RESET_TRIP_SCREEN':
      return {
        ...state,
        tripEnded: false,
        locked: false
      };

    default:
      return state;
  }
};
