import styles from './Search.module.scss';

const Search = () => {
  return ( 
    <form className={styles.Search}>
      <i className='bx bx-search'></i>
      <input className={styles.SearchInput} type="text" placeholder='Search everything' />
      <button className={styles.SearchButton}>
        <i className='bx bx-filter'></i>
      </button>
    </form>
  );
}
 
export default Search;