/* eslint-disable arrow-body-style */
import style from './Logo.module.css';
import {ReactComponent as LogoIcon} from './img/logo.svg';

export const Logo = () => {
  return (
    <a className={style.link} href="/">
      <LogoIcon className={style.logo} alt="blogget logotype"/>
    </a>
  );
};
