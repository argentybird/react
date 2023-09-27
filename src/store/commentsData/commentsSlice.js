import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {},
  status: 'loading',
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
      state.data = action.payload.data;
      state.error = '';
    },

    commentsDataRequestError: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});
console.log(commentsSlice);

export default commentsSlice.reducer;
