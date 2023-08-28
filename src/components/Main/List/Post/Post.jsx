import style from './Post.module.css';
import PropTypes from 'prop-types';
import Ups from './Ups';
import Title from './Title';
import DeleteButton from './DeleteButton';
import Date from './Date';

export const Post = ({postData}) => {
  const {title, author, ups, created_utc: date} = postData;
  return (
    <div className={style.post}>
      <Title title={title} author={author}/>
      <Ups ups={ups} />
      <DeleteButton del={false}/>
      <Date date={date}/>
    </div>
  );
};


Post.propTypes = {
  postData: PropTypes.object,
};
