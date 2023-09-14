import style from './List.module.css';
import {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Post from './Post';
import {generateRandomId} from '../../../utils/generateRandomId';
import {postsDataRequestAsync} from '../../../store/postsData/postsDataAction';

export const List = () => {
  const postsData = useSelector(state => state.posts.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          dispatch(postsDataRequestAsync);
        }
      },
      {rootMargin: '100px'},
    );
    observer.observe(endList.current);
  }, [endList.current]);

  return (
    <ul className={style.list}>
      <>
        {postsData.map(postData => (
          <Post key={generateRandomId()} postData={postData.data} />
        ))}
      </>
      <li ref={endList} className="style.end" />
    </ul>
  );
};
