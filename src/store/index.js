import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {postDataReducer} from './postsData/postsDataReducer';
import {authReducer} from './auth/authReducer';
import {commentsDataReducer} from './commentsData/commentsDataReducer';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    postsData: postDataReducer,
    commentsData: commentsDataReducer,
  },
  middleware: getdefaultMiddleware =>
    getdefaultMiddleware().concat(tokenMiddleware),
});
