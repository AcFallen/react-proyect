const API_URL = 'https://65728909d61ba6fcc0152a25.mockapi.io/api/v1'

export const getUsers = async (email) => {
  const url = `${API_URL}/users?email=${email}`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
};

export const createUser = async (form) => {
  const url = `${API_URL}/users`;

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


export const updateUser = async (id,newfullname,newsurnames,newpassword) => {
  const url = `${API_URL}/users/${id}`;

  const options = {
    method: 'PUT', // PATCH
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      fullname: newfullname,
      surnames: newsurnames,
      password: newpassword
     })
  }

  const response = await fetch(url, options)

  const data = response.json()

  return data
}

export const deleteUser = async (id) => {
  const url = `${API_URL}/users/${id}`

  const options = {
    method: 'DELETE'
  }

  const response = await fetch(url, options)

  const data = response.json()

  return data
}