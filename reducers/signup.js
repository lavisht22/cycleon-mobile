const initialState = {
  name: '',
  phone: '',
  loading: false,
  error: false,
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_PENDING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SIGNUP_REJECTED':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload
      };
    case 'SIGNUP_FULFILLED':
      return {
        ...state,
        loading: false,
        error: false
      };

    default:
      return state;
  }
};
