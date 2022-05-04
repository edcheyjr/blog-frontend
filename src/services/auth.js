import Axios from 'axios';

export async function loginUser(email, password) {
  const data = await Axios('http://localhost:5000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return data;
}

export async function signupUser(firstname, lastname, email, password) {
  const userObj = {
    firstname,
    lastname,
    email,
    password,
  };
  const response = await Axios('http://localhost:5000/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),
  });
  return response;
}

// axios.get('http://localhost:2400/api/Users')
//       .then(response => response.data)
//       .catch(error => {
//           console.error(`Error fetching Users: ${error}`);
//       })
