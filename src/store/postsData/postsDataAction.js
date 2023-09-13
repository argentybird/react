import axios from 'axios';
import {API_AUTH_URL, API_URL} from '../../api/const';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postRequest = () => ({
  type: 'POST_REQUEST',
  error: '',
});

export const postRequestSuccess = data => ({
  type: 'POST_REQUEST_SUCCESS',
  data,
});

export const postRequestError = error => ({
  type: 'POST_REQUEST_ERROR',
  error,
});

export const postsDataRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;

  let url = '';
  let options = {};

  if (token) {
    url = `${API_AUTH_URL}/best`; // https://oauth.reddit.com/best
    options = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
  } else {
    url = `${API_URL}/best`; // https://api.reddit.com/best
  }

  dispatch(postRequest());

  axios(url, options)
    .then(({data: {data}}) => {
      const posts = data.children;
      dispatch(postRequestSuccess(posts));
    })
    .catch(err => {
      console.error('err: ', err);
      dispatch(postRequestError(err.message));
    });
};
