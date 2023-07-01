import { FC } from 'react';
import { tagsFormated } from '../../../utils/TagsFormated';
import styles from './PreviewCard.module.scss';
import { FilmCardProps } from '../FilmCard/FilmCard';

const PreviewCard: FC<FilmCardProps> = ({imageUrl, title, tags}) => {
  return ( 
    <div className={styles.PreviewCard}>
      <img className={styles.PreviewCardImg} src={imageUrl} alt="" />
      <div className={styles.PreviewCardTextbox}>
        <h6 className={styles.PreviewCardTitle}><a href='#'>{title}</a></h6>
        <p className={styles.PreviewCardTags}>
          {tagsFormated(tags)}
        </p>
      </div>
    </div>
   );
}
 
export default PreviewCard;