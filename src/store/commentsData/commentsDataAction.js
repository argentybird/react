import axios from 'axios';
import {API_AUTH_URL} from '../../api/const';

import {createAsyncThunk} from '@reduxjs/toolkit';

export const commentsDataRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().token.token;
    if (!token) return;

    return axios(`${API_AUTH_URL}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(
        ({
          data: [
            {
              data: {
                children: [{data: post}],
              },
            },
            {
              data: {children},
            },
          ],
        }) => {
          const comments = children.map(item => item.data);
          return {post, comments};
        },
      )
      .catch(error => ({error: error.toString()}));
  },
);
