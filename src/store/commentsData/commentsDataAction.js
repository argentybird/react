import axios from 'axios';
import {API_URL} from '../../api/const';
import {commentsSlice} from './commentsSlice';

export const commentsDataRequestAsync = id => dispatch => {
  dispatch(commentsSlice.actions.commentsDataRequest);

  axios(`${API_URL}/comments/${id}`)
    .then(({data}) => {
      const post = data[0].data.children[0].data;
      const comments = data[1].data.children;
      dispatch(
        commentsSlice.actions.commentsDataRequestSuccess({post, comments}),
      );
    })
    .catch(error => {
      dispatch(commentsSlice.actions.commentsDataRequestError({error}));
    });
};
