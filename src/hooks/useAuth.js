import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';

export const useAuth = (token) => {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    if (!token) {
      console.log('setAuth');
      setAuth({});
      return;
    }
    console.log(`fetch ${URL_API}/api/v1/me`);
    fetch(`${URL_API}/api/v1/me`, {
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
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
