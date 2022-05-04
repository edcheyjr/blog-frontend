import Blog from '../../components/Blog';
import { ThemeProvider } from 'react-bootstrap';

export default function Blogs() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <div className='dashboard-wrapper'>
        <div className='right'>
          <div
            className='rounded-circle border border-3 border-success'
            style={{
              backgroundImage: `url(images/defaultProfile.jpg)`,
              width: '100px',
              height: '100px',
              backgroundSize: 'cover',
              backgroundClip: 'border-box',
            }}
          />
          <div className='name'>john doe</div>
        </div>
        <div className='dashboard'>
          <h2 className='text-muted p-4'>Blogs</h2>
          <div className='col-12'>
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
