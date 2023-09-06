import Header from './components/Header';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {PostContextProvider} from './context/postsContext';
import {store} from './store';


const App = () => (
  <Provider store={store}>
    <AuthContextProvider>
      <PostContextProvider>
        <Header />
        <Main />
      </PostContextProvider>
    </AuthContextProvider>
  </Provider>
);
export default App;
