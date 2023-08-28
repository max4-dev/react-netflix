'use client';

import { FC, useEffect, useState } from 'react';
import styles from './FilmCard.module.scss';
import { tagsFormated } from '@/utils/TagsFormated';
import Link from 'next/link';
import { fromJsonToJs } from '@/utils/fromJsonToJs';

export interface FilmCardProps {
  images: string,
  title: string,
  tags: string[],
  id: number
}

const FilmCard: FC<FilmCardProps> = ({title, tags, id, images}) => {
  const [tagsArr, setTagsArr] = useState([]);
  const imageUrl = fromJsonToJs(images);

  useEffect(() => {
    const tagsArray = fromJsonToJs(tags);
    setTagsArr(tagsArray);
  }, []);
  
  return ( 
    <div className={styles.FilmCard}>
      <img className={styles.FilmCardImg} src={imageUrl[0]} alt="" />
      <h6 className={styles.FilmCardTitle}><Link href={`/film/${id}`}>{title}</Link></h6>
      <p className={styles.FilmCardTags}>
        {tagsFormated(tagsArr)}
      </p>
    </div>
  );
}
 
export default FilmCard;