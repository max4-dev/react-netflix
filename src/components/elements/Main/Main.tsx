import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import styles from './Main.module.scss'
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import FilmCard from "../FilmCard/FilmCard";
import { films } from "../../../api/data";
import PreviewCard from "../PreviewCard/PreviewCard";
import Promo from "../Promo/Promo";

const Main = () => {
  return ( 
    <div className={styles.Main}>
      <div className="container">
        <Header />
        <Promo {...films[0]} />
        <Slider title="Parties">
          <Swiper scrollbar={{hide: false,}} modules={[Scrollbar]} className="mySlider" slidesPerView={4} spaceBetween={35}>
            {films.map((film, index) => (
            <SwiperSlide key={index}><FilmCard imageUrl={film.imageUrl} title={film.title} tags={film.tags} /></SwiperSlide>)
            )}
          </Swiper>
        </Slider>
        <Slider title="Continue Watching">
          <Swiper scrollbar={{hide: false,}} modules={[Scrollbar]} className="mySlider" slidesPerView={4} spaceBetween={35}>
            {films.map((film, index) => (
              <SwiperSlide key={index}><PreviewCard imageUrl={film.imageUrl} title={film.title} tags={film.tags} /></SwiperSlide>)
            )}
          </Swiper>
        </Slider>
      </div>
    </div>
  );
}

export default Main;