import { Table, Button } from 'react-bootstrap';
import { useState } from 'react';
import EditUserModal from '../pages/admin/edit-user';

const UserTable = () => {
  const [id, setId] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleUserDelete = (async) => {
    // handle user delete
    // get userid
    // pass the id to  delete request
    return;
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Edit</th>
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
            <button className='button' onClick={handleShow}>
              edit
            </button>
          </td>
          <td>
            <Button variant='danger' onClick={handleUserDelete}>
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
            <button className='button' onClick={handleShow}>
              edit
            </button>
          </td>
          <td>
            <Button variant='danger' onClick={handleUserDelete}>
              delete
            </Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>
            <button className='button' onClick={handleShow}>
              edit
            </button>
          </td>
          <td>
            <Button variant='danger' onClick={handleUserDelete}>
              delete
            </Button>
          </td>
        </tr>
      </tbody>
      <EditUserModal show={show} handleClose={handleClose} />
    </Table>
  );
};

export default UserTable;
