import style from './Dates.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export const Dates = ({date}) =>
  <time className={style.date} dateTime={date}>{formatDate(date)}</time>;

Dates.propTypes = {
  date: PropTypes.number,
};
