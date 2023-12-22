export const getUsers = async (email, password) => {
  const url = `http://localhost:3000/users?email=${email}&password=${password}`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
};

export const createUser = async (form) => {
  const url = "http://localhost:3000/users";

  const body = JSON.stringify(form);

  // ???
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json", 
    },
    body,
  };

  const response = await fetch(url, options);

  const data = await response.json();

  return data;
};
