import {AUTH_REQUEST, AUTH_LOGOUT,
  AUTH_REQUEST_SUCCESS, AUTH_REQUEST_ERROR} from './action';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: ''
      };

    case AUTH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,

      };
    case AUTH_LOGOUT:
      return {
        ...state,
      };

    default: return state;
  }
};

