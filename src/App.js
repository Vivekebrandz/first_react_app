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
    path: '/first_react_app/',
    element: <App/>,
    children: [
      {
        path: '/first_react_app/',
        element: <Home/>
      },
      {
        path: '/first_react_app/about',
        element: <Suspense><About/></Suspense>
      },
      {
        path: '/first_react_app/contact',
        element: <Contact/>
      }
    ]
  }
]);

export default router;

