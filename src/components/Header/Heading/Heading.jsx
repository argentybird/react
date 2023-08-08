import PropTypes from 'prop-types';
import React from 'react';
import style from './Heading.module.css';
import {Text} from '../../../UI/Text';


export const Heading = ({text}) =>
  <Text As='h2' size={22} tsize={26} center
    className={style.heading}>{text}</Text>;

Heading.propTypes = {
  text: PropTypes.string,
};

