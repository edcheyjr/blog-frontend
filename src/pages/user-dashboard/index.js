import { useState } from 'react';
import { ThemeProvider, Col } from 'react-bootstrap';
import Blog from '../../components/Blog';
import EditProfileModal from '../../components/EditProfileModal';
import CreateBlogModal from './createNewBlog';

const EditIcon = 'svg/edit.svg';
const AddIcon = 'svg/add.svg';

export default function DashBoard() {
  const [show, setShow] = useState(false);
  const [showCreate, setCreateShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleCreateShow = () => setCreateShow(true);
  const handleCreateClose = () => setCreateShow(false);

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <div className='d-flex justify-content-between align-items-baseline padding-x'>
        <div className='right'>
          <div
            className='rounded-circle border border-3 border-success'
            style={{
              backgroundImage: `url(images/defaultProfile.jpg)`,
              width: '150px',
              height: '150px',
              backgroundSize: 'cover',
              backgroundClip: 'border-box',
            }}
          />
          <div className='center-items'>
            <p className='name'>john doe</p>
            <img
              src={EditIcon}
              alt='edit icon'
              className='icon'
              onClick={handleShow}
            />
          </div>
        </div>
        <div onClick={handleCreateShow} className='button large'>
          <div className='d-flex gap-2 align-items-center '>
            <img src={AddIcon} alt='add blog' className='icon' />
            <div className=''>start a new blog!!!</div>
          </div>
        </div>
      </div>
      <div className='dashboard-wrapper'>
        <div className='dashboard'>
          <div className='col-12'>
            <h2 className='text-muted p-4'>Dashboard</h2>
            <EditProfileModal show={show} handleClose={handleClose} />
            <Blog isInDash={true} />
            <Blog isInDash={true} />
            <Blog isInDash={true} />
            <Blog isInDash={true} />
          </div>
        </div>
      </div>
      {/* modal for creating blog */}
      <CreateBlogModal show={showCreate} handleClose={handleCreateClose} />
    </ThemeProvider>
  );
}
