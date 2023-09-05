import {useContext} from 'react';
import {authContext} from '../../../context/authContext';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {commentContext} from '../../../context/commentContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  const {value, setValue} = useContext(commentContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
        <textarea
          className={style.textarea}
          autoFocus={true}
          value = {value}
          onChange={handleChange}
        ></textarea>
        <button className={style.btn} type='submit'>Отправить</button>
      </form>
    </>
  );
};
