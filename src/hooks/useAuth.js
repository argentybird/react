import {useEffect, useState} from 'react';
import {API_AUTH_URL} from '../api/const';
import {deleteToken} from '../store/tokenReducer';
import {useDispatch, useSelector} from 'react-redux';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenRecucer.token);


  useEffect(() => {
    if (!token) {
      dispatch(deleteToken());
      console.log('setAuth');
      setAuth({});
      return;
    }

    fetch(`${API_AUTH_URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.error(err);
        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
