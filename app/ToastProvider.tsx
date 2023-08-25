'use client'

import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    mounted && (
      <>
        {children}
        <ToastContainer
          theme="dark"
        />
      </>
    )
  );
};

export default ToastProvider;