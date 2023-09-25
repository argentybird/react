import {useEffect} from 'react';
import {commentsDataRequestAsync} from '../store/commentsData/commentsDataAction';
import {useSelector, useDispatch} from 'react-redux';

export const useCommentsData = id => {
  const {post, comments} = useSelector(state => state.commentsData.data);
  const status = useSelector(state => state.commentsData.status);
  const error = useSelector(state => state.commentsData.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsDataRequestAsync(id));
  }, []);

  return [post, comments, status, error];
};
