import style from './Ups.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Ups = ({ups}) => {
  console.log();
  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Rating up' />
      <Text
        As='p'
        color='grey8F'
        bold
        fs={12}
        fst={16}
        className={style.ups}
      >
        {ups}
      </Text>
      <button className={style.down} aria-label='Rating down' />
    </div>
  );
};

Ups.propTypes = {
  ups: PropTypes.number,
};
