'use client';

import { FC, useEffect, useState } from 'react';
import styles from './FilmCard.module.scss';
import { tagsFormated } from '@/utils/TagsFormated';
import Link from 'next/link';

export interface FilmCardProps {
  imageUrl: string,
  title: string,
  tags: string[],
  id: number
}

const FilmCard: FC<FilmCardProps> = ({title, tags, id}) => {
  // const tagsStr = JSON.stringify(tags)
  // const tagsArr = JSON.parse(tagsStr);
  // console.log(typeof tagsArr);
  const [tagsArr, setTagsArr] = useState([])

  useEffect(() => {
    const tagsArray = tags.replace(/[\[\]']/g, '').split(',').map(tag => tag.trim());
    setTagsArr(tagsArray);
  }, []);

  console.log(tagsArr);
  
  
  
  
  
  return ( 
    <div className={styles.FilmCard}>
      {/* <img className={styles.FilmCardImg} src={film.imageUrl} alt="" /> */}
      <h6 className={styles.FilmCardTitle}><Link href={`/film/${id}`}>{title}</Link></h6>
      <p className={styles.FilmCardTags}>
        {tagsFormated(tagsArr)}
      </p>
    </div>
  );
}
 
export default FilmCard;