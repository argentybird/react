import style from './Ups.module.css';
import PropTypes from 'prop-types';
import rateUp from './img/up.svg';
import rateDown from './img/down.svg';

export const Ups = ({ups}) => {
  // const {ups} = postData;
  console.log('ups: ', ups);
  return (
    <div className={style.raiting}>
      <button className={style.up} src={rateUp} aria-label='Rise up raiting'/>
      <p className={style.ups}>{ups}</p>
      <button className={style.down} src={rateDown} aria-label='Down raiting'/>
    </div>
  );
};

Ups.propTypes = {
  ups: PropTypes.number,
};
