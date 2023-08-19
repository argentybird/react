import {useState, useEffect} from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);
  const delToken = () => {
    setToken('');
    localStorage.removeItem('bearer');
    console.log('token removed');
  };

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      console.log('asking new token');
      const token = new URLSearchParams(location.hash.substring(1))
        .get('access_token');
      setToken(token);
    }
    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    }
    /*
    if (localStorage.removeItem('bearer')) {
      setToken(delToken);
    }
    */
  }, [token, delToken]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }

    /*
    if (delToken) {
      localStorage.removeItem('bearer', delToken);
    }
    */
  }, [token, delToken]);

  return {token, delToken};
};
