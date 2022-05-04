import Blog from '../../components/Blog';
const userId = 1;
export default function SingleBlogs() {
  return (
    <div className='dashboard-wrapper-full'>
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
        <h2 className='text-muted p-4'>{Blog.title}</h2>
        <div className='col-12'>
          <Blog id={userId} />
        </div>
      </div>
    </div>
  );
}
