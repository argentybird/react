import {useEffect} from 'react';
import {API_AUTH_URL} from '../api/const';
import {deleteToken} from '../store/tokenReducer';
import {useDispatch, useSelector} from 'react-redux';
import {authRequestSuccess, authRequest,
  authRequestError,
  authLogout} from '../store/auth/action';
import axios from 'axios';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);


  useEffect(() => {
    if (!token) return;

    dispatch(authRequest());
    axios(`${API_AUTH_URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data: {name, icon_img: iconImg}}) => {
        const img = iconImg.replace(/\?.*$/, '');
        const data = {name, img};
        dispatch(authRequestSuccess(data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(authRequestError(err.message));
        dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, clearAuth];
};
