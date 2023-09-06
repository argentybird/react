import {useEffect, useState} from 'react';
import {API_URL} from '../api/const';

export const useCommentsData = (id) => {
  const [commentsData, setCommentsData] = useState({});


  useEffect(() => {
    if (!id) return;

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
  }, [id]);

  return [commentsData];
};
