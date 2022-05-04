import { Table, Button } from 'react-bootstrap';
import { useState } from 'react';

// import modal for editing blog
import EditBlogModal from '../pages/admin/edit-blog';

const BlogTable = () => {
  const [id, setId] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleBlogApprove = async () => {
    // change the status of the blog to approve
    return;
  };
  const handleBlogDelete = async () => {
    // get the id of the blog
    // pass it to delete request
    return;
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Body</th>
          <th>Approve</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <button className='button' onClick={handleBlogApprove}>
              approve
            </button>
          </td>
          <td>
            <Button variant='warning' onClick={handleShow}>
              edit
            </Button>
          </td>
          <td>
            <Button variant='danger' onClick={handleBlogDelete}>
              delete
            </Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>
            <button className='button' onClick={handleBlogApprove}>
              approve
            </button>
          </td>
          <td>
            <Button variant='warning' onClick={handleShow}>
              edit
            </Button>
          </td>
          <td>
            <Button variant='danger' onClick={handleBlogDelete}>
              delete
            </Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>
            <button className='button' onClick={handleBlogApprove}>
              approve
            </button>
          </td>
          <td>
            <Button variant='warning' onClick={handleShow}>
              edit
            </Button>
          </td>
          <td>
            <Button variant='danger' onClick={handleBlogDelete}>
              delete
            </Button>
          </td>
        </tr>
      </tbody>
      <EditBlogModal show={show} handleClose={handleClose} />
    </Table>
  );
};

export default BlogTable;
