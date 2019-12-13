import { getData, postData } from '../utils/service';

export function getCycles() {
  return {
    type: 'GET_CYCLES',
    payload: {
      promise: getData('/cycles')
    }
  };
}

export function bookCycle(cycleId, duration) {
  return {
    type: 'BOOK_CYCLE',
    payload: {
      promise: postData('/cycles/book', {
        cycleId,
        duration
      })
    }
  };
}

export function resetHomeScreen() {
  return {
    type: 'RESET_HOME_SCREEN'
  };
}
