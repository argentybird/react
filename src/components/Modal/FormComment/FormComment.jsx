import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useSelector, useDispatch} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';

export const FormComment = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.comment.comment);
  const auth = useSelector(state => state.auth.data);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <Text As="h3" size={14} tsize={18}>
          {auth.name}
        </Text>
        <textarea
          className={style.textarea}
          autoFocus={true}
          value={value}
          onChange={handleChange}
        ></textarea>
        <button className={style.btn} type="submit">
          Отправить
        </button>
      </form>
    </>
  );
};
