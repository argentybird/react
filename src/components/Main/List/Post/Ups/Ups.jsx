import style from './Ups.module.css';
import PropTypes from 'prop-types';
import rateUp from './img/up.svg';
import rateDown from './img/down.svg';
import {Text} from '../../../../../UI/Text';

export const Ups = ({ups}) => (
  <Text As='div'size={18} tsize={20}
    height={22} className={style.raiting} medium>
    <button className={style.up} src={rateUp} aria-label='Rise up raiting'/>
    <Text As='p' className={style.ups} medium>{ups}</Text>
    <button className={style.down} src={rateDown} aria-label='Down raiting'/>
  </Text>
);


Ups.propTypes = {
  ups: PropTypes.number,
};
