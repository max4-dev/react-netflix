import { FC } from 'react';
import styles from './AsideItem.module.scss';

interface AsideItemTypes {
  title: string;
  children: any;
}

const AsideItem: FC<AsideItemTypes> = ({title, children}) => {
  return (
    <div className={styles.AsideItem}>
      <h5 className={styles.AsideItemTitle}>
        {title}
      </h5>
      <div>
        {children}
      </div>
    </div>
  );
}
 
export default AsideItem;