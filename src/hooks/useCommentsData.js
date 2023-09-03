import {useEffect, useState, useContext} from 'react';
import {API_URL} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = (id) => {
  const {token} = useContext(tokenContext);
  const [commentsData, setCommentsData] = useState({});


  useEffect(() => {
    if (!token) return;

    fetch(`${API_URL}/comments/${id}`)
      .then(response => {
        console.log();
        return response.json();
      })
      .then((data) => {
        setCommentsData(data);
      })
      .catch(err => {
        console.log('err:', err);
      });
  }, []);

  return [commentsData];
};
