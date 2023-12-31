import {useState, useEffect} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import {useNavigate} from 'react-router-dom';
import Preloader from '../../../UI/Preloader';
import ErrorModal from '../../errorModal';

export const Auth = () => {
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);
  const {auth, loading, error, clearAuth} = useAuth();
  const navigate = useNavigate();
  const page = useSelector(state => state.postsData.page);

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = e => {
    dispatch(deleteToken());
    clearAuth();
    page ? navigate(`/category/${page}`) : navigate(`/`);
  };

  useEffect(() => {
    if (error) {
      navigate(`/`);

      setTimeout(() => {
        clearAuth();
      }, 5000);
    }
  }, [error]);

  return (
    <div className={style.container}>
      {error && <ErrorModal error={`Ошибка авторизации: ${error}`} />}
      {loading ? (
        <Preloader size={30} />
      ) : auth.name ? (
        <>
          <button className={style.btn}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Avatar ${auth.name}`}
              onClick={getOut}
            />
          </button>

          {showLogout && (
            <button className={style.logout} onClick={logOut}>
              Выйти
            </button>
          )}
        </>
      ) : (
        <Text className={style.authLink} As="a" href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
    </div>
  );
};
