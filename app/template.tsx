'use client';

import { useSelector } from 'react-redux';
import { selectIsAuth } from '@/redux/auth/slice';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/store';
import '@/scss/style.scss';

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuth = useSelector(selectIsAuth);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [])

  useEffect(() => {
    if (!isAuth) {
      // router.push('/login');
    }
  }, [isAuth, router]);

  return (
    <>
      {children}
    </>
  )
}
