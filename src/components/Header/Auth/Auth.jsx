import {useState, useContext} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [showLogout, setShowLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    delToken();
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn}>
            <img className={style.img}
              src={auth.img} title={auth.name}
              alt={`Avatar ${auth.name}`}
              onClick={getOut} />
          </button>

          {showLogout && (
            <button className={style.logout}
              onClick={logOut} >
            Выйти
            </button>
          )}
        </>
      ) : (
      <Text className={style.authLink} As='a' href={urlAuth}>
        <LoginIcon className={style.svg} />

      </Text>
      )}
    </div>

  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func};
