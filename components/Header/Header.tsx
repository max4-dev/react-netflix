'use client';

import Search from '../Search/Search';
import UserNav from '../UserNav/UserNav';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Search />
      <UserNav />
    </div>
  );
}
 
export default Header;