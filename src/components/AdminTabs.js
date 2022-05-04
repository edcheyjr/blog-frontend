import { Tabs, Tab } from 'react-bootstrap';
import BlogTable from '../components/BlogTable';
import UserTable from '../components/UserTable';

const AdminTabs = () => {
  return (
    <Tabs defaultActiveKey='blog' id='admin-tab' className='mb-3'>
      <Tab eventKey='blog' title='blog'>
        <BlogTable />
      </Tab>
      <Tab eventKey='user' title='user'>
        <UserTable />
      </Tab>
    </Tabs>
  );
};

export default AdminTabs;
