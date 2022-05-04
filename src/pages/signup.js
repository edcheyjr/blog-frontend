import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//import authication services
import { signupUser } from '../services/auth';

export default function Signup() {
  // get data
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await signupUser(firstname, lastname, email, password);
      // store token
      console.log(response);
      if (response.status === 200) {
        // token
        const token = response.token;
        console.log(token);
        // push to dashboard
        navigate('/user-dashboard');
      } else {
        const err = response.error;
        setError(err);
      }
    } catch (err) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setError(err.message);
    }
  };

  return (
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <form method='POST' onSubmit={handleSignUp}>
          <h3>Sign Up</h3>
          {error && <p className='error'>{error}</p>}
          <div className='mb-3'>
            <label>First name</label>
            <input
              type='text'
              className='form-control'
              placeholder='first name'
              onChange={({ target }) => {
                setFirstName(target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <label>Last name</label>
            <input
              type='text'
              className='form-control'
              placeholder='last name'
              onChange={({ target }) => {
                setLastName(target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <label>Email address</label>
            <input
              type='email'
              className='form-control'
              placeholder='enter email'
              onChange={({ target }) => {
                setEmail(target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='enter password'
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
          </div>
          <div className='d-grid'>
            <button className='button' type='submit'>
              Sign Up
            </button>
          </div>
          <p className='forgot-password text-right'>
            Already registered <a href='/sign-in'>sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
