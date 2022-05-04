import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { updateBlog } from '../../services/api';

const EditBlogModal = ({ show, handleClose }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await updateBlog(title, desc, body);
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
      setTitle('');
      setDesc('');
      setBody('');
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
              <Modal.Title>Edit Blog</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {error && <p className='error'>{error}</p>}
              {success && <p className='error'>{success}</p>}
              <div className='mb-3'>
                <label>Title</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='title'
                  onChange={({ target }) => {
                    setTitle(target.value);
                  }}
                />
              </div>
              <div className='mb-3'>
                <label>Desc</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='desc'
                  onChange={({ target }) => {
                    setDesc(target.value);
                  }}
                />
              </div>
              <div className='mb-3'>
                <label>Blog Body</label>
                <textarea
                  id='body'
                  cols='30'
                  rows='10'
                  className='form-control'
                  placeholder='edit you blog'
                  onChange={({ target }) => {
                    setBody(target.value);
                  }}
                ></textarea>
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

EditBlogModal.propType = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EditBlogModal;
