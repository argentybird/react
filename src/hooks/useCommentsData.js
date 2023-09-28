import {useEffect} from 'react';
import {commentsDataRequestAsync} from '../store/commentsData/commentsDataAction';
import {useSelector, useDispatch} from 'react-redux';

export const useCommentsData = id => {
  const post = useSelector(state => state.comments.post);
  const comments = useSelector(state => state.comments.comments);
  const status = useSelector(state => state.comments.status);
  const error = useSelector(state => state.commentsa.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsDataRequestAsync(id));
  }, []);

  console.log({post, comments, status, error});
  return [post, comments, status, error];
};
