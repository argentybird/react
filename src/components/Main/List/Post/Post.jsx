import style from './Post.module.css';
import PropTypes from 'prop-types';
import Ups from './Ups';
import Title from './Title';
import DeleteButton from './DeleteButton';
import Date from './Date';
import Image from './Image';
import Author from './Author';

export const Post = ({postData}) => {
  const {thumbnail, title, author, ups, created_utc: date} = postData;
  return (
    <li className={style.post}>
      <Image link={thumbnail} alt={title} />

      <div className={style.content}>
        <Title title={title} link='#post' />
        <Author author={author} link='#author' />
      </div>
      <Ups ups={ups} />
      <DeleteButton />
      <Date date={date}/>
    </li>
  );
};


Post.propTypes = {
  postData: PropTypes.object,
};
