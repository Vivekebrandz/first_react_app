// import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
// import About from './Components/About';
import Contact from './Components/Contact';
import { Suspense, lazy } from 'react';

const About = lazy(() => import('./Components/About'));

function App() {
  return (
      <div className="App">
          <Header/>
          <Outlet/>
      </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <Suspense><About/></Suspense>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  }
]);

export default router;

