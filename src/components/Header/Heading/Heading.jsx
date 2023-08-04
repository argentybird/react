/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import style from './Heading.module.css';


export const Heading = (props) => {
  return (
    <h2 className={style.heading}>{props.text}</h2>
  );
};
