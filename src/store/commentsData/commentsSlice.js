import {createSlice} from '@reduxjs/toolkit';
import {commentsDataRequestAsync} from './commentsDataAction';

const initialState = {
  post: {},
  comments: [],
  status: '',
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsDataRequest: state => {
      state.error = '';
      state.status = 'loading';
    },
    commentsDataRequestSuccess: (state, action) => {
      state.status = 'loaded';
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
    },

    commentsDataRequestError: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
  extraReducers: {
    [commentsDataRequestAsync.pending.type]: state => {
      state.error = '';
      state.status = 'loading';
    },
    [commentsDataRequestAsync.fulfilled.type]: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
      state.status = 'loaded';
    },

    [commentsDataRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});

export default commentsSlice.reducer;
