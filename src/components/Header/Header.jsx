import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Heading from './Heading';
import Search from './Search';
import Auth from './Auth';
import {Routes, Route} from 'react-router-dom';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Routes>
          <Route path="*" element={<Heading />} />
          <Route path="/category/:page/" element={<Heading />} />
        </Routes>
        <Search />
        <Auth />
      </div>
    </Layout>
  </header>
);
