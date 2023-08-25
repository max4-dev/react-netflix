'use client'

import { getUser } from "@/api/users";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from './user.module.scss';
import { formatDate } from "@/utils/formatDate";

const UserOne = ({ params }) => {
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const { user } = params;

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(user);
      setUserData(data)
    }
    fetchUser()
  }, []);
  

  return (
    userData && (
    <div className={styles.user}>
      <div className={styles.userCard}>
        <div>
          <h5 className={styles.title}>
            {userData.username}
          </h5>
          <p className={styles.email}>
            {userData.email}
          </p>
        </div>
        <div className={styles.info}>
          На сайте c <span>{formatDate(userData.createdAt)}</span> года
        </div>
      </div>
    </div>)
  );
}
 
export default UserOne;