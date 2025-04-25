import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home.jsx';
import Login from './pages/Login/Signin.jsx';
import Register from './pages/Register/Signup.jsx';
import Panchavati from './pages/Cards/Panchavati.jsx';
import Jaipur from './pages/Cards/Jaipur.jsx';
import Rishikesh from './pages/Cards/Rishikesh.jsx';
import Manali from './pages/Cards/Manali.jsx';
import GateWay from './pages/Cards/GateWay.jsx';
import Shimla from './pages/Cards/Shimla.jsx';
import Varanasi from './pages/Cards/Varanasi.jsx';
import Konkan from './pages/Cards/Konkan.jsx';
import Explore from './pages/Explore.jsx';
import Map from './pages/Explore/Map.jsx';
import Hotel from './pages/Explore/Hotel.jsx';
import CreateBlog from './pages/Explore/CreateBlog.jsx';
import About from './pages/About.jsx';
import TravelCalender from './pages/Explore/Calender.jsx';
import MyBlog from './pages/Explore/MyBlog.jsx';
import ViewBlog from './pages/Explore/ViewBlog.jsx';
import HotelDetails from './pages/Explore/hotelDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />, 
      },
      {
        path:'/explore',
        element:<Explore />,
      },
      {
        path:'/hotel',
        element:<Hotel />,
      },
      {
        path: '/hotel/:id',
        element: <HotelDetails />,
      },
      {
        path:'/map',
        element:<Map />,
      },
      {
        path:'/createblog',
        element:<CreateBlog />,
      },
      {
        path:'/myBlog',
        element:<MyBlog />,
      },
      {
        path:'/viewblog/:id',
        element:<ViewBlog />,
      },
      {
        path:'/calender',
        element:<TravelCalender />
      },
      {
        path:'/about',
        element:<About />
      },
     {
      path:'/panchavati',
      element:<Panchavati />,
     },
     {
      path:'/jaipur',
      element:<Jaipur />,
     },
     {
      path:'/rishikesh',
      element:<Rishikesh />,
     },
     {
      path:'/manali',
      element:<Manali />,
     },
     {
      path:'/gateWay',
      element:<GateWay/>,
     },
     {
      path:'/shimla',
      element:<Shimla/>,
     },
     {
      path:'/varanasi',
      element:<Varanasi/>
     },
     {
      path:'/konkan',
      element:<Konkan/>
     }
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);