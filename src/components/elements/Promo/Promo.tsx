import { FC, SetStateAction, useRef, useState } from 'react';
import styles from './Promo.module.scss';
import imdb from '../../../assets/images/imdb.png';
import { langs } from '../../../api/data';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { EffectFade, FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import SwiperClass from 'swiper/types/swiper-class';


interface PromoProps {
  title: string;
  raiting: string;
  lang: string;
  images: string[];
}

const Promo: FC<PromoProps> = ({title, raiting, lang, images}) => {
  const swiper = useRef<SwiperClass>(null!);
 const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  
  return ( 
    <div className={styles.Promo}>
      <div className={styles.PromoDescr}>
        <h2 className={styles.PromoTitle}>{title}</h2>
        <ul className={styles.PromoInfo}>
          <li className={styles.PromoInfoItem}>
            <img className={styles.PromoInfoImg} src={imdb} alt="" />
            <span>{raiting}</span>
          </li>
          <li className={styles.PromoInfoItem}>
            <img className={styles.PromoInfoImg} src={langs[lang][1]} alt="" />
            <span>{langs[lang][0]}</span>
          </li>
        </ul>
        <a className={styles.PromoLink} href="#">
          Watch
        </a>
      </div>
      <div className={styles.PromoSlider}>
        {/* <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          {images.map((img) => (
          <SwiperSlide>
            <img className={styles.PromoSliderImg} src={img} alt="" />
          </SwiperSlide>
        ))}
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={(ref) => { swiper.current = ref; }}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((img) => (
          <SwiperSlide>
            <img className={styles.PromoSliderImg} src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper> */}

      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="Swiper"
      >
        {images.map((img) => (
          <SwiperSlide>
            <img className={styles.PromoSliderImg} src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}
 
export default Promo;