'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '@/redux/store';
import { fetchSignup } from '@/redux/auth/asyncActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import EmailInput from '../../components/EmailInput';
import NameInput from '../../components/NameInput';
import PasswordInput from '../../components/PasswordInput';
import { RequestStatus } from '@/interfaces/auth';
import { useSelector } from 'react-redux';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const { status } = useSelector(state => state.auth)
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
    mode: 'onChange'
  });

  const onSubmit = async (values: any) => {
    try {
      const data = await dispatch(fetchSignup(values));
      
      if (data.payload.warningMessage) {
        toast.error(data.payload.warningMessage, {
        theme: "dark",
        });
      } else {
        toast.success('Успех', {
          theme: "dark",
        });
        router.replace('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Login">
      <h3 className="LoginTitle">Signup <Link href="/login">/ Login</Link></h3>
      <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput email={email} setEmail={setEmail} register={register} errors={errors} />
        <NameInput username={username} setUsername={setUsername} register={register} errors={errors} />
        <PasswordInput password={password} setPassword={setPassword} register={register} errors={errors} />
        <button className='LoginBtn' type="submit">Signup</button>
      </form>
    </div>  
   );
};

export default Signup;