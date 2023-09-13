import {useEffect} from 'react';
import {authRequestAsync, authLogout} from '../store/auth/authAction';
import {useDispatch, useSelector} from 'react-redux';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);

  const error = useSelector(state => state.auth.error);
  const loading = useSelector(state => state.auth.loading);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return {auth, loading, clearAuth, error};
};
