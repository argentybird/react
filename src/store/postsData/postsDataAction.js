import axios from 'axios';
import {API_AUTH_URL, API_URL} from '../../api/const';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const POST_REQUEST_SUCCESS_AFTER = 'POST_REQUEST_SUCCESS_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const POSTS_DATA_CLEAR = 'POSTS_DATA_CLEAR';

export const postRequest = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess = data => ({
  type: POST_REQUEST_SUCCESS,
  posts: data.children,
  after: data.after,
});

export const postRequestSuccessAfter = data => ({
  type: POST_REQUEST_SUCCESS_AFTER,
  posts: data.children,
  after: data.after,
});

export const postRequestError = error => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const postsDataClear = page => ({
  type: POSTS_DATA_CLEAR,
  page,
});

export const changePage = page => ({
  type: CHANGE_PAGE,
  page,
});

export const postsDataRequestAsync = newPage => (dispatch, getState) => {
  let page = getState().postsData.page;
  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }
  const token = getState().token.token;
  const after = getState().postsData.after;
  const loading = getState().postsData.loading;
  const isLast = getState().postsData.isLast;

  if (!token || loading || isLast) return;

  let url = '';
  let options = {};

  const bestUrl = `/${page}?limit=20${after ? `&after=${after}` : ''}`;

  if (token) {
    url = `${API_AUTH_URL}${bestUrl}`;

    options = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
  } else {
    url = `${API_URL}${bestUrl}`;
  }

  dispatch(postRequest());

  axios(url, options)
    .then(({data}) => {
      if (after) {
        dispatch(postRequestSuccessAfter(data.data));
      } else {
        dispatch(postRequestSuccess(data.data));
      }
    })
    .catch(err => {
      dispatch(postRequestError(err.message));
    });
};
