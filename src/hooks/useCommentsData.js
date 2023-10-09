import {useEffect} from 'react';
import {commentsDataRequestAsync} from '../store/commentsData/commentsDataAction';
import {useSelector, useDispatch} from 'react-redux';

export const useCommentsData = id => {
  const post = useSelector(state => state.commentsData.post);
  const comments = useSelector(state => state.commentsData.comments);
  const status = useSelector(state => state.commentsData.status);
  const error = useSelector(state => state.commentsData.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsDataRequestAsync(id));
  }, []);

  console.log({post, comments, status, error});
  return [post, comments, status, error];
};
