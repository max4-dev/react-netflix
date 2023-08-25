'use client'

import { useState } from 'react';
import { RegisterOptions, UseFormRegisterReturn, useForm } from 'react-hook-form';
import { useAppDispatch } from '@/redux/store';
import { fetchLogin } from '@/redux/auth/asyncActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NameInput from '../../components/NameInput';
import PasswordInput from '../../components/PasswordInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Login.module.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange'
  });

  const onSubmit = async (values: {username: string, password: string}) => {
    const data = await dispatch(fetchLogin(values));
    console.log(data);
    
    if (!data.payload) {
      toast.error('Неверный пароль и/или логин', {
        theme: "dark",
      });
    } else {
      toast.success('Успех', {
        theme: "dark",
      });
      router.replace('/');
    }
  };

  return (
    <div className="Login">
      <h3 className="LoginTitle">Login <Link href="/sign-up">/ Signup</Link></h3>
      <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
        <NameInput username={username} setUsername={setUsername} register={register} errors={errors} />
        <PasswordInput password={password} setPassword={setPassword} register={register} errors={errors} />
        <button className='LoginBtn' type="submit">Login</button>
      </form>
    </div>
   );
};
 
export default Login;