import { ThemeProvider } from 'react-bootstrap';
import AdminTabs from '../../components/AdminTabs';

export default function admindashboard() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <div className='auth-wrapper'>
        <div className='admin-card'>
          <h2 className='text-muted p-4'>Admin</h2>

          <AdminTabs />
        </div>
      </div>
    </ThemeProvider>
  );
}
