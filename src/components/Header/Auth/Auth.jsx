import {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL_API} from '../../../api/const';


export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isExit, setExit] = useState(false);


  useEffect(() => {
    if (!token) {
      setAuth({});
      return;
    }

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.err(err);
        setAuth({});
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn}>
            <img className={style.img}
              src={auth.img} title={auth.name}
              alt={`Avatar ${auth.name}`}
              onClick={() => setExit(!isExit)} />
          </button>

          {isExit && (
            <button className={style.logout} onClick={delToken}>
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
  delToken: PropTypes.string};
