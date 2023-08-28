/* eslint-disable arrow-body-style */
import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {PostContextProvider} from '../../context/postsContext';

export const Main = (props) => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <PostContextProvider>
        <List />
      </PostContextProvider>
    </Layout>
  </main>
);


