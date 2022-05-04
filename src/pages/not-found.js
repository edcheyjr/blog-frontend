const notfound = '/svg/not-found.svg';

export default function Notfound() {
  return (
    <div className='container mx-auto text-red-500 bg-white p-6 mt-8'>
      <section className='auth-wrapper align-center'>
        <img src={notfound} alt='404' className='mx-auto ' />
        <h2 className='font-medium-bold text-3xl text-center'>
          404. page not found
        </h2>
      </section>
    </div>
  );
}
