import style from './Title.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {Link, useParams} from 'react-router-dom';

export const Title = ({title, id}) => {
  const {page} = useParams();
  return (
    <div className={style.content}>
      <Text As="h2" className={style.title}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text bold size={14} tsize={22} className={style.linkPost}>
            {title}
          </Text>
        </Link>
      </Text>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};
