'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import styles from './Main.module.scss'
// import Scrollbar from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import FilmCard from "../FilmCard/FilmCard";
import PreviewCard from "../PreviewCard/PreviewCard";
import Promo from "../Promo/Promo";
import { useEffect, useState } from "react";
import { getFilms } from "@/api/film";

const Main = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    try {
      const fetchFilms = async () => {
      const filmData = await getFilms();
      setFilms(filmData);
    };

    fetchFilms();
    } catch (error) {
      console.log(error);
    }
  }, [])

  console.log(films);
  

  return ( 
    <div className={styles.Main}>
      <div className="container">
        <Header />
        <Promo {...films[0]} />
        <Slider title="Parties">
          <Swiper scrollbar={{hide: false,}} spaceBetween={35} breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 2,
            },
            1885: {
              slidesPerView: 3,
            }
          }}>
            {films.map((film, index) => (
            <SwiperSlide key={index}> 
              <FilmCard {...film} key={index} />
             </SwiperSlide>
             )
            )}
          </Swiper>
        </Slider>
        <Slider title="Continue Watching">
          <Swiper scrollbar={{hide: false,}} slidesPerView={4} spaceBetween={35} breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 2,
            },
            1885: {
              slidesPerView: 3,
            },
            1900: {
              slidesPerView: 4,
            },
          }}>
            {films.map((film, index) => (
              <SwiperSlide key={index}>
                <PreviewCard {...film} key={index} />
              </SwiperSlide>
              )
            )}
          </Swiper>
        </Slider>
      </div>
    </div>
  );
}

export default Main;