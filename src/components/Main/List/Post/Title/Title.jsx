import style from './Title.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';


export const Title = ({title, author}) => (
  <div>
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title} />
      <Text As='h2' className={style.content}>
        <h2 className={style.title}>
          <Text As='a' size={18} tsize={24}
            className={style.linkPost} href="#post">
            {title}
          </Text>
        </h2>
        <Text As='a' size={12} tsize={14} color='orange'
          className={style.linkAuthor} href="#author">
          {author}
        </Text>
      </Text>
    </li>
  </div>
);


Title.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
