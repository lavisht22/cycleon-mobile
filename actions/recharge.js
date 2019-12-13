import { postData } from '../utils/service';

export function rechargeAccount(amount) {
  return {
    type: 'RECHARGE_ACCOUNT',
    payload: {
      promise: postData('/profile/recharge', {
        amount
      })
    }
  };
}

export function resetRecharge() {
  return {
    type: 'RESET_RECHARGE_SCREEN'
  };
}
