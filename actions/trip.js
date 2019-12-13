import { getData, putData } from '../utils/service';

export function getActiveTrip() {
  return {
    type: 'GET_ACTIVE_TRIP',
    payload: {
      promise: getData('/trips/active')
    }
  };
}

export function lockCycle() {
  return {
    type: 'LOCK_CYCLE',
    payload: {
      promise: putData('/trips/active/lock')
    }
  };
}

export function unlockCycle() {
  return {
    type: 'UNLOCK_CYCLE',
    payload: {
      promise: putData('/trips/active/unlock')
    }
  };
}

export function endTrip() {
  return {
    type: 'END_TRIP',
    payload: {
      promise: putData('/trips/active/end')
    }
  };
}

export function resetTripScreen() {
  return {
    type: 'RESET_TRIP_SCREEN'
  };
}
