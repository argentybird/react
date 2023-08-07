import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthIcon} from './img/login.svg';


export const Auth = ({auth}) => (

  <button className={style.button} alt="authorisation">
    {auth ? auth : <AuthIcon />}
  </button>

);

Auth.propTypes = {
  auth: PropTypes.bool};
