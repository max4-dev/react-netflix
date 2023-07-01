import { FC } from 'react';
import styles from './FilmCard.module.scss';
import { tagsFormated } from '../../../utils/TagsFormated';

export interface FilmCardProps {
  imageUrl: string,
  title: string,
  tags: string[],
}

const FilmCard: FC<FilmCardProps> = ({imageUrl, title, tags}) => {
  return ( 
    <div className={styles.FilmCard}>
      <img className={styles.FilmCardImg} src={imageUrl} alt="" />
      <h6 className={styles.FilmCardTitle}><a href='#'>{title}</a></h6>
      <p className={styles.FilmCardTags}>
        {tagsFormated(tags)}
      </p>
    </div>
  );
}
 
export default FilmCard;