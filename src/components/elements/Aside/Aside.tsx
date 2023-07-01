// import styles from './Aside.module.scss';
import { users } from '../../../api/data';
import AsideItem from '../AsideItem/AsideItem';
import styles from './Aside.module.scss';

const Aside = () => {

  return (
    <div className={styles.Aside}>
      <h4 className={styles.Logo}>
        Netflix.<span>design</span>
      </h4>
      <div className={styles.AsideItems}>
        <AsideItem title='News Feed'>
          <ul className={styles.AsideList}>
            <li className={styles.AsideListItem}>
              <a className={`${styles.AsideListLink} ${styles.AsideListLinkActive}`} href="#"><i className='bx bxs-compass'></i>Browse</a>
            </li>
            <li className={styles.AsideListItem}>
              <a className={styles.AsideListLink} href="#"><i className='bx bx-heart'></i>Watchlist</a>
            </li>
            <li className={styles.AsideListItem}>
              <a className={styles.AsideListLink} href="#"><i className='bx bx-calendar' ></i>Coming soon</a>
            </li>
          </ul>
        </AsideItem>
        <AsideItem title='Following'>
          <ul className={styles.AsideUsers}>
            {users.map((user) => <li className={styles.AsideUsersItem} key={user.id}>
              <a href="#">
                <img className={styles.AsideUsersImg} src={user.avatarUrl} alt="" />
                <p>{user.name}</p>
                <span className={user.status === 'online' ? styles.online : styles.offline}></span>
              </a>
            </li>)}
          </ul>
          <a className={styles.More} href="#">
            <span><i className='bx bx-chevron-down'></i></span>
            Load more
          </a>
        </AsideItem>
      </div>
      <a className={styles.LogOut} href="#">
        <i className='bx bx-log-out bx-rotate-180' ></i>
        Log Out
      </a>
    </div>
  );
};

export default Aside;
