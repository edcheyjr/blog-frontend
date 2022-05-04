import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EditBlogModal from '../pages/user-dashboard/editBlog';

// blog blog name blog description user image

const Blog = ({ isInDash = false, id }) => {
  const IMAGE_URL = `images/${id}.jpg`;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Card className='card border border-2 secondary-color'>
      <Card.Header className='d-flex justify-content-between '>
        <h3 className='title'>BlogTitle</h3>
        <div className='px-2 py-4'>
          <div
            className='rounded-circle border-custom'
            style={{
              backgroundImage: `url(images/defaultProfile.jpg)`,
              width: '100px',
              height: '100px',
              backgroundSize: 'cover',
              backgroundClip: 'border-box',
            }}
          />
          <div className='username'>john</div>
        </div>
      </Card.Header>
      <Card.Body className='px-4 py-2'>
        <Card.Title className='desc'>Special title treatment</Card.Title>
        <Card.Text className='body'>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <div className='d-flex gap-2'>
          <Link class='button' to='/blogs:id'>
            View
          </Link>
          {isInDash && (
            <button className='button-sec' onClick={handleShow}>
              Edit
            </button>
          )}
        </div>
      </Card.Body>
      <Card.Footer className='text-muted '>2 days ago</Card.Footer>
      <EditBlogModal show={show} handleClose={handleClose} />
    </Card>
  );
};
Blog.propTypes = {
  isInDash: PropTypes.bool,
  id: PropTypes.number,
};
export default Blog;
