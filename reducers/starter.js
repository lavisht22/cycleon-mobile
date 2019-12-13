import { extractErrorMessage } from '../utils/service';

const initialState = {
  loading: false,
  error: false,
  errorMessage: false,
  activeTrip: false,
  completed: false,
  profile: {}
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
        errorMessage: extractErrorMessage(action),
        completed: true
      };

    case 'GET_ACTIVE_TRIP_FULFILLED':
      return {
        ...state,
        loading: false,
        activeTrip: true,
        completed: true
      };

    case 'GET_USER_PROFILE_PENDING':
      return {
        ...state,
        loading: true
      };

    case 'GET_USER_PROFILE_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: extractErrorMessage(action)
      };

    case 'GET_USER_PROFILE_FULFILLED':
      return {
        ...state,
        loading: false,
        profile: action.payload.data
      };

    case 'RESET_STARTER':
      return { ...state, activeTrip: false, completed: false };

    default:
      return state;
  }
};
