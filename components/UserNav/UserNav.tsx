import styles from './UserNav.module.scss'

const UserNav = () => {
  return ( 
    <button className={styles.AvatarBox}>
      <img className={styles.Avatar} src="https://w7.pngwing.com/pngs/263/555/png-transparent-account-avatar-profile-user-avatars-icon.png" alt="" />
    </button>
  );
}
 
export default UserNav;