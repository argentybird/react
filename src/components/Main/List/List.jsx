import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2022-02-21T03:45:00.000Z',
      id: 78,
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 20,
      date: '2021-02-24T09:45:00.000Z',
      id: 90,
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 4,
      date: '2022-05-24T09:45:00.000Z',
      id: 65,
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 28,
      date: '2022-02-24T09:45:00.000Z',
      id: 45,
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
