'use client'

import FilmPage from '@/components/FilmPage/FilmPage';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/redux/store';
import { getFilm } from '@/api/film';

const Film = ({ params }) => {
  const [film, setFilm] = useState();
  const dispatch = useAppDispatch();

  const { id } = params;

  useEffect(() => {
    const fetchFilm = async () => {
      const filmData = await getFilm(id);
      setFilm(filmData);
    };

    fetchFilm();
  }, [id]);

  return (
    <>
      {film && <FilmPage {...film} />}
    </>
  );
};

export default Film;