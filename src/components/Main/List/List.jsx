import style from './List.module.css';
import {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {generateRandomId} from '../../../utils/generateRandomId';
import Post from './Post';
import Preloader from '../../../UI/Preloader';
import {
  postsDataRequestAsync,
  postsDataClear,
} from '../../../store/postsData/postsDataAction';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const token = useSelector(state => state.token.token);
  const postsData = useSelector(state => state.postsData.posts);
  const loading = useSelector(state => state.postsData.loading);
  const after = useSelector(state => state.postsData.after);
  const pageNumber = useSelector(state => state.postsData.pageNumber);
  const endList = useRef(null);
  const {page} = useParams();
  const dispatch = useDispatch();

  const firstLoading = after ? false : loading;

  const isShowButton = pageNumber >= 2;

  const handleClick = e => {
    e.target.blur();
    dispatch(postsDataRequestAsync());
  };

  useEffect(() => {
    dispatch(postsDataClear(page));
  }, [token]);

  useEffect(() => {
    dispatch(postsDataRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          dispatch(postsDataRequestAsync());
        }
      },
      {rootMargin: '100px'},
    );
    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {firstLoading ? (
          <Preloader size={100} />
        ) : (
          <>
            {postsData.map(postData => (
              <Post key={generateRandomId()} postData={postData.data} />
            ))}
          </>
        )}
        {isShowButton ? (
          <button className={style.btn} onClick={handleClick}>
            загрузить еще
          </button>
        ) : (
          <li ref={endList} className={style.end} />
        )}
      </ul>
      <Outlet />
    </>
  );
};
