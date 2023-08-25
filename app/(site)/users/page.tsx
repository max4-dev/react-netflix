'use client'

import { getUsers } from "@/api/users";
import { useAppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import styles from '@/scss/users/users.module.scss';
import Link from "next/link";

const Users = () => {
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };


    fetchUsers(users);
  }, []);

  console.log(users);
  

  return ( 
    <ul className={styles.userList}>
      {users && users.map((user) => (
        <li className={styles.userCard}>
          <Link href={`/users/${user.id}`}>{user.username}</Link>
          <p>id: {user.id}</p>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}
 
export default Users;