import style from './Data.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export const Data = ({date}) => {
  console.log('date: ', date);
  return (
    <time className={style.date} dateTime={date}>{formatDate(date)}</time>
  );
};

Data.propTypes = {
  date: PropTypes.string,

};
