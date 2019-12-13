import { getData } from '../utils/service';

export function getRides() {
  return {
    type: 'GET_RIDES',
    payload: {
      promise: getData('/trips')
    }
  };
}
