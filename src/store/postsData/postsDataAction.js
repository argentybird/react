import axios from 'axios';
import {API_AUTH_URL} from '../../api/const';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postRequest = () => ({
  type: 'POST_REQUEST',
  error: '',
});

export const postRequestSuccess = data => ({
  type: 'POST_REQUEST_SUCCESS',
  posts: data.children,
  after: data.after,
});

export const postRequestError = error => ({
  type: 'POST_REQUEST_ERROR',
  error,
});

export const postsDataRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  const after = getState().posts.after;
  if (!token) return;
  dispatch(postRequest());

  axios(
    `${API_AUTH_URL}/best?limit=10&${after ? `after=${after}` : ''}`, // https://oauth.reddit.com/best
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    },
  )
    .then(({data}) => {
      dispatch(postRequestSuccess(data.data));
    })
    .catch(err => {
      console.error('err: ', err);
      dispatch(postRequestError(err.message));
    });
};
