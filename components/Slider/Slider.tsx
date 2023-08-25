'use client';

import { FC, ReactNode } from 'react';
import styles from './Slider.module.scss';

interface SliderProps {
  title: string;
  children: ReactNode;
}

const Slider: FC<SliderProps> = ({title, children}) => {
  return ( 
    <div className={styles.Slider}>
      <h3 className='title'>{title}</h3>
      <div className={styles.SliderBox}>
        {children}
      </div>
    </div>
   );
}
 
export default Slider;