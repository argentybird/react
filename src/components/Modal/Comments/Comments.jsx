/* eslint-disable operator-linebreak */
import style from './Comments.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';
import Dates from '../../Main/List/Post/Dates';

export const Comments = ({comments}) => {
  if (comments.length === 0) {
    return (
      <Text As="p" className={style.nocomment} size={14} tsize={18}>
        Нет комментариев
      </Text>
    );
  }

  const currentComments =
    comments[comments.length - 1].kind === 'more'
      ? comments.slice(0, -1)
      : comments;

  return (
    <ul className={style.list}>
      {currentComments.map(
        item =>
          item.body && (
            <li key={item.data.id} className={style.item}>
              <Text As="h3" className={style.author} size={18} tsize={22}>
                {item.data.author}
              </Text>
              <Text As="p" className={style.comment} size={14} tsize={18}>
                {item.data.body}
              </Text>
              <Dates date={item.data.created} />
            </li>
          ),
      )}
    </ul>
  );
};

/* export const Comments = ({comments}) => (
  <ul className={style.list}>
    {comments.length ? (
      comments.map(
        item =>
          item.body && (
            <li className={style.item} key={item.id}>
              <Text As="h3" className={style.author} size={18} tsize={22}>
                {item.author}
              </Text>
              <Text As="p" className={style.comment} size={14} tsize={18}>
                {item.body.replaceAll(`&gt;`, ' ')}
              </Text>
              <Dates date={item.data.created} />
            </li>
          ),
      )
    ) : (
      <p>No comments</p>
    )}
  </ul>
); */

Comments.propTypes = {
  comments: PropTypes.array,
};
