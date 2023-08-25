export const getFilm = async (id) => {
  const res = await fetch(`http://localhost:4444/films/${id}`, {
    method: "GET",
    headers: new Headers({ 'content-type': "application/json" })
  });

  return res.json();
}

export const getFilms = async () => {
  const res = await fetch(`http://localhost:4444/films`, {
    method: "GET",
    headers: new Headers({ 'content-type': "application/json" })
  });

  return res.json();
}