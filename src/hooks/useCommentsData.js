import {useEffect, useState} from 'react';
import {API_URL} from '../api/const';
import {useSelector} from 'react-redux';

export const useCommentsData = (id) => {
  const [commentsData, setCommentsData] = useState({});
  const token = useSelector(state => state.tokenReducer.token);


  useEffect(() => {
    if (!token) return;

    window.fetch(`${API_URL}/comments/${id}`)
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
