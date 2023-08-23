import {useState, useEffect} from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);
  const delToken = () => {
    localStorage.removeItem('bearer');
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
  }, [token]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  return {token, delToken};
};
