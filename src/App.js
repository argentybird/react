import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {PostContextProvider} from './context/postsContext';

import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';


const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <PostContextProvider>
      <Header />
      <Main />
    </PostContextProvider>

  );
};

export default App;
