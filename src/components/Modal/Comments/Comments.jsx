import style from './Comments.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';
import Dates from '../../Main/List/Post/Dates';

export const Comments = ({comments}) => {
  console.log(comments);
  return (
    <>
      <ul className={style.list}>
        {comments.length ? (
          comments.map(item => {
            console.log(item);
            return (
              <li className={style.item} key={item.id}>
                <Text As="h3" className={style.author} size={18} tsize={22}>
                  {item.author}
                </Text>
                <Text As="p" className={style.comment} size={14} tsize={18}>
                  {item.body}
                </Text>
                <Dates date={item.created} />
              </li>
            );
          })
        ) : (
          <p>No comments</p>
        )}
      </ul>
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};
