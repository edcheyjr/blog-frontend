import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//import authication services
import { loginUser } from '../services/auth';

export default function Login() {
  // get data
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const userObj = {
    email,
    password,
  };

  // get login credential and send errors if empty

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      // store token
      if (data) {
        console.log(data);
        // if(data.response === )
        // push to dashboard
        navigate('/user-dashboard');
      }
    } catch (err) {
      setEmail('');
      setPassword('');
      setError(err.message);
    }
  };

  return (
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <form method='POST' onSubmit={handleLogin}>
          <h3>Sign In</h3>
          {error && <p className='error'>{error}</p>}
          <div className='mb-3'>
            <label>Email address</label>
            <input
              type='email'
              required
              className='form-control'
              placeholder='Enter email'
              onChange={({ target }) => {
                setEmail(target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <label>Password</label>
            <input
              type='password'
              required
              className='form-control'
              placeholder='Enter password'
              onChange={({ target }) => {
                setPassword(target.value);
              }}
              min='8'
              max='20'
            />
          </div>
          <div className='mb-3'>
            <div className='custom-control custom-checkbox'>
              <input
                type='checkbox'
                className='custom-control-input'
                id='customCheck1'
              />
              <label className='custom-control-label' htmlFor='customCheck1'>
                Remember me
              </label>
            </div>
          </div>
          <div className='d-grid'>
            <button type='submit' className='button'>
              Submit
            </button>
          </div>
          <p className='forgot-password text-right'>
            Not <a href='/sign-up'>signed in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
