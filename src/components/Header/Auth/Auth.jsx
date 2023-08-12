import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';


export const Auth = ({token}) => (

  <div className={style.container} alt="authorisation">
    {token ? (
      token
      ) : (
      <Text As='a' href={urlAuth}>
        <LoginIcon className={style.svg} />
      </Text>
      )}
  </div>

);

Auth.propTypes = {
  token: PropTypes.string};
