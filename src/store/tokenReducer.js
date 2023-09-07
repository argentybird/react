import {getToken, setToken} from '../api/token';

const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token,
});

const DELETE_TOKEN = 'DELETE_TOKEN';
export const deleteToken = token => ({
  type: DELETE_TOKEN,
  token,
});

const initialState = {
  token: getToken(),
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: action.token,
      };
    case DELETE_TOKEN:
      setToken('');
      return {
        ...state,
        token: '',

      };

    default:
      return state;
  }
};
