import styles from './Flag.module.scss'
import { FlagProps } from './Flag.props';

const Flag = ({lang}: FlagProps) => {
  return ( 
    <img className={styles.flag} src={lang} />
   );
}
 
export default Flag;