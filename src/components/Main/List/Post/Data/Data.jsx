import style from './Data.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export const Data = ({postData}) => {
  const {date} = postData;
  console.log('date: ', date);
  return (
    <time className={style.date} dateTime={date}>{formatDate(date)}</time>
  );
};

Data.propTypes = {
  postData: PropTypes.string,

};
