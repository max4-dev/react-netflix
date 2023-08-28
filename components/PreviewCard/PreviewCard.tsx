'use client';

import { FC, useEffect, useState } from 'react';
import { tagsFormated } from '@/utils/TagsFormated';
import styles from './PreviewCard.module.scss';
import { FilmCardProps } from '../FilmCard/FilmCard';
import { fromJsonToJs } from '@/utils/fromJsonToJs';
import Link from 'next/link';

const PreviewCard: FC<FilmCardProps> = ({images, title, tags, id}) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [tagsArr, setTagsArr] = useState([]);

  useEffect(() => {
    setImageUrl(fromJsonToJs(images))
  }, [images]);

  useEffect(() => {
    const tagsArray = fromJsonToJs(tags);
    setTagsArr(tagsArray);
  }, []);

  return ( 
    <div className={styles.PreviewCard}>
      {imageUrl && <img className={styles.PreviewCardImg} src={imageUrl[0]} alt="" />}
      <div className={styles.PreviewCardTextbox}>
        <h6 className={styles.PreviewCardTitle}><Link href={`/film/${id}`}>{title}</Link></h6>
        <p className={styles.PreviewCardTags}>
          {tagsFormated(tagsArr)}
        </p>
      </div>
    </div>
   );
}
 
export default PreviewCard;