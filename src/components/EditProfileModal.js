import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { updateUser } from '../services/api';

const EditProfileModal = ({ show, handleClose }) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUser(firstname, lastname, email, password);
      // store token
      console.log(response);
      if (response.status === 200) {
        // token
        setSuccess(response);
        console.log(response);
        // push to dashboard
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
    <Modal
      className='bg-transparent'
      show={show}
      onHide={handleClose}
      backdrop='static'
      keyboard={false}
    >
      {' '}
      <div className='auth-wrapper' style={{ width: '100%' }}>
        <div className='auth-inner'>
          <form method='POST' onSubmit={handleUpdate}>
            <Modal.Header closeButton>
              <Modal.Title>Update Profile</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {error && <p className='error'>{error}</p>}
              {success && <p className='error'>{success}</p>}
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
            </Modal.Body>

            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
              <button type='submit' className='button'>
                Save changes
              </button>
            </Modal.Footer>
          </form>
        </div>
      </div>
    </Modal>
  );
};

EditProfileModal.propType = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EditProfileModal;
