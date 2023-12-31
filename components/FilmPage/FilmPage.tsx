'use client';

// import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import ReactPlayer from 'react-player'
import styles from './FilmPage.module.scss';
import video from '@/assets/video/wither.mp4'
import { fromJsonToJs } from '@/utils/fromJsonToJs';
import Flag from '../UI/Flag/Flag';
// import video from './Wither.webm'


const FilmPage = ({title, descr, filmLink, images, language}
  ) => 
  {
    // console.log(video);
    
  const imagesArray = fromJsonToJs(images);

  return (
    <div className={styles.Film}>
      <div className="container">
        <div className={styles.FilmInner}>
          <h3 className={styles.FilmTitle}>{title}</h3>
          <p className={styles.FilmDescr}>
            {descr}
            <div>
              <Flag lang={language} />
              <span>{language}</span>
            </div>
          </p>
          <div>
            <div className={styles.FilmSlider}>
              <Swiper slidesPerView={2.5} spaceBetween={185}>
              {imagesArray.map((image, index) => (
                <SwiperSlide key={index}>
                  <img className={styles.FilmImg} src={image} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          </div>
          <div>
            {/* <ReactPlayer controls={true} url={video} /> */}
            {/* <video src={video}></video> */}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default FilmPage;