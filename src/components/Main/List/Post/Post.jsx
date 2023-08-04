import style from './Post.module.css';
import PropTypes from 'prop-types';
import Ups from './Ups';
import Title from './Title';
import DeleteButton from './DeleteButton';
import Data from './Data';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  <div className={style.post}>
    <Title title={title} author={author}/>
    <Ups ups={ups} />
    <DeleteButton del={true}/>
    <Data date={date}/>


  </div>;
};


Post.propTypes = {
  postData: PropTypes.object,
};
