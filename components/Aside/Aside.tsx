'use client';
// import styles from './Aside.module.scss';
import { logOut } from '@/redux/auth/slice';
import AsideItem from '../AsideItem/AsideItem';
import { useAppDispatch } from '@/redux/store';
import { getUsers } from '@/api/users';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import 'boxicons';
import '@/scss/style.scss';
import styles from './Aside.module.scss';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { setActive } from '@/redux/categories/slice';

const categories = [
  {name: 'Browse', icon: 'bxs-compass', link: 'browse'}, {name: 'Watchlist', icon: 'bx-heart', link: 'watchlist'}, {name: 'Users', icon: 'bx-calendar', link: 'users'}
]

const Aside = () => {
  const path = usePathname();
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState();

  const { active } = useSelector(state => state.categories);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };

    fetchUsers(users);
  }, []);

  useEffect(() => {
    const activeCategoryIndex = categories.findIndex(cat => path.split('/')[1] === cat.link);
    console.log(activeCategoryIndex);
    
    dispatch(setActive(activeCategoryIndex));
    // categories.map((cat, i) => {
    //   if (path.split('/')[1] === cat.link) {
    //     dispatch(setActive(i))
    //   } else {
    //     dispatch(setActive(null))
    //   }
    // })
  }, [path])

  return (
    <div className={styles.Aside}>
      <h4 className={styles.Logo}>
        <Link href="/">Netflix.<span>design</span></Link>
      </h4>
      <div className={styles.AsideItems}>
        <AsideItem title='News Feed'>
          <ul className={styles.AsideList}>
            {categories.map((cat, i) => (
              <li className={styles.AsideListItem} key={i}>
                <Link className={`${styles.AsideListLink} ${i === active && styles.AsideListLinkActive}`} href={`/${cat.link}`}><i className={`bx ${cat.icon}`} ></i>{cat.name}</Link>
            </li>
            ))}
            {/* <li className={styles.AsideListItem}>
              <a className={`${styles.AsideListLink} ${styles.AsideListLinkActive}`} href="#"><i className='bx bxs-compass'></i>Browse</a>
            </li>
            <li className={styles.AsideListItem}>
              <a className={styles.AsideListLink} href="#"><i className='bx bx-heart'></i>Watchlist</a>
            </li>
            <li className={styles.AsideListItem}>
              <Link className={`${styles.AsideListLink} ${styles.AsideListLinkActive}`} href="/users"><i className='bx bx-calendar' ></i>Users</Link>
            </li> */}
          </ul>
        </AsideItem>
        <AsideItem title='Following'>
          <ul className={styles.AsideUsers}>
            {users && users.map((user, index) => index < 5 && <li className={styles.AsideUsersItem} key={user.id}>
              <Link href={`/users/${user.id}`}>
                <img className={styles.AsideUsersImg} src={user.avatarUrl} alt="" />
                <p>{user.username}</p>
                <span className={user.status === 'online' ? styles.online : styles.offline}></span>
              </Link>
            </li>)}
          </ul>
          <Link className={styles.More} href="/users">
            <span><i className='bx bx-chevron-down'></i></span>
            Load more
          </Link>
        </AsideItem>
      </div>
      <button className={`cleanBtn ${styles.LogOut}`} onClick={() => dispatch(logOut())}>
        <i className='bx bx-log-out bx-rotate-180'></i>
        Log Out
      </button>
    </div>
  );
};

export default Aside;
