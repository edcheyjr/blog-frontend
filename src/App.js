import { useEffect, lazy, Suspense } from 'react';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import styles from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import loading component
import Loading from './components/Loading';

// import components
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const NotFound = lazy(() => import('./pages/not-found'));
const Dashboard = lazy(() => import('./pages/user-dashboard'));
const AdminDashboard = lazy(() => import('./pages/admin'));
const Blogs = lazy(() => import('./pages/blogs'));
const SingleBlog = lazy(() => import('./pages/blogs/singleBlog'));

// temp boolean check if user or admin

const user = true;
const admin = true;

function App() {
  useEffect(() => {
    document.title = `blogX`;
  }, []);

  return (
    <Router>
      <div className='App'>
        <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
          <div className='container'>
            <Link className='navbar-brand logo-custom' to={'/'}>
              positron<span className='highlight'>XYZ</span>
            </Link>
            <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
              <ul className='navbar-nav ml-auto'>
                {user ? (
                  <>
                    {admin && (
                      <li className='nav-item'>
                        <Link className='nav-link' to={'/admin-dashboard'}>
                          Admin
                        </Link>
                      </li>
                    )}
                    <li className='nav-item'>
                      <Link className='nav-link' to={'/user-dashboard'}>
                        Dashboard
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to={'/'}>
                        Blogs
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className='nav-item'>
                      <Link className='nav-link' to={'/sign-in'}>
                        Login
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to={'/sign-up'}>
                        Sign up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/user-dashboard' element={<Dashboard />} />
            <Route path='/' element={<Blogs />} />
            <Route path='/blogs:id' element={<SingleBlog />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
