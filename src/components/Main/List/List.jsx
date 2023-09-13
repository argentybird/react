import style from './List.module.css';
import {usePostsData} from '../../../hooks/usePostsData';
import Post from './Post';
import {Preloader} from '../../../UI/Preloader/Preloader';
import {generateRandomId} from '../../../utils/generateRandomId';

export const List = props => {
  const [postsData, loading] = usePostsData();

  return (
    <ul className={style.list}>
      {loading ? (
        <Preloader size={100} />
      ) : (
        <>
          {postsData.map(postData =>
            <Post key={generateRandomId()} postData={postData.data} />)}
        </>
      )
      }
    </ul>
  );
};
