import { getData } from '../utils/service';

export function getActiveTrip() {
  return {
    type: 'GET_ACTIVE_TRIP',
    payload: {
      promise: getData('/trips/active')
    }
  };
}

export function getUserProfile() {
  return {
    type: 'GET_USER_PROFILE',
    payload: {
      promise: getData('/profile')
    }
  };
}

export function resetStarter() {
  return {
    type: 'RESET_STARTER'
  };
}
