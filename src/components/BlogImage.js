const id = 1;

const BlogImage = () => {
  return (
    <div
      className=' col-7'
      style={{
        backgroundImage: `url(images/${id}.jpg)`,
        backgroundSize: 'cover',
        backgroundClip: 'border-box',
        width: 'auto',
        height: 'auto',
      }}
    ></div>
  );
};

export default BlogImage;
