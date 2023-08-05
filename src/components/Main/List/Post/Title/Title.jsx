import style from './Title.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Title = ({title, author}) => {
  // const {title, author} = postData;
  console.log('title, author: ', title, author);
  return (
    <div>
      <li className={style.post}>
        <img className={style.img} src={notphoto} alt={title} />
        <div className={style.content}>
          <h2 className={style.title}>
            <a className={style.linkPost} href='#post'>
              {title}
            </a>
          </h2>
          <a className={style.linkAuthor} href='#author'>{author}</a>
        </div>
      </li>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
