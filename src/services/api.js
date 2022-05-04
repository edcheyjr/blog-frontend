import Axios from 'axios';

// user update
export async function updateUser(firstname, lastname, email, password = null) {
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

// blog update
export async function updateBlog(title, desc, body) {
  const blogObj = {
    title,
    desc,
    body,
  };
  const response = await Axios('http://localhost:5000/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blogObj),
  });
  return response;
}

// axios.get('http://localhost:2400/api/Users')
//       .then(response => response.data)
//       .catch(error => {
//           console.error(`Error fetching Users: ${error}`);
//       })
