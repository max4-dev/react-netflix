export const getUsers = async () => {
  const res = await fetch(`http://localhost:4444/users`, {
    method: "GET",
    headers: new Headers({ 'content-type': "application/json" })
  });

  return res.json();
}

export const getUser = async (id) => {
  const res = await fetch(`http://localhost:4444/users/${id}`, {
    method: "GET",
    headers: new Headers({ 'content-type': "application/json" })
  });

  return res.json();
}