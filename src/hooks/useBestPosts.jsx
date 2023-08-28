import {useEffect, useContext, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';


export const useBestPosts = () => {
  const {token} = useContext(tokenContext);
  const [bestPosts, setBestPosts] = useState([]);

  let url = 'https://api.reddit.com/best';
  let options = {};

  useEffect(() => {
    if (token) {
      url = `${URL_API}/best`;
      options = {
        headers: {
          Authorization: `bearer ${token}`,
        }
      };
    }


    fetch(url, options)
      .then((response) => {
        console.log('bestPostResponse', response);
        return response.json();
      })
      .then((json) => {
        setBestPosts(json.data.children);
      })
      .catch((err) => {
        console.error('err: ', err);
      });
  }, [token]);

  return [bestPosts];
};
