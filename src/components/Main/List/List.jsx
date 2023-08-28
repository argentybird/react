import {useContext} from 'react';
import {postContext} from '../../../context/postsContext';
import style from './List.module.css';
import Post from './Post';
import {generateRandomId} from '../../../utils/generateRandomId';

export const List = props => {
  const {bestPosts} = useContext(postContext);

  return (
    <ul className={style.list}>
      {bestPosts.map((postData) => (
        <Post key={generateRandomId()} postData={postData.data} />
      ))}
    </ul>
  );
};
