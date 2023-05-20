import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import ErrorPage from '../pages/Shared/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import AllToys from '../pages/AllToys/AllToys';
import MyToys from '../pages/MyToys/MyToys';
import AddAToy from '../pages/AddAToy/AddAToy';
import Blogs from '../pages/Blogs/Blogs';
import Register from '../pages/Register/Register';
import PrivateRoutes from './PrivateRoutes';
import ToyDetails from '../pages/toyDetails/toyDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/login",
            element: <Login/>,
          },
          {
            path: "/register",
            element: <Register/>
          },
          {
            path: "/all-toys",
            element: <AllToys/>,
            loader: () => fetch(`http://localhost:5000/toys`),
          },
          {
            path: "/toy_Details/:id",
            element: <ToyDetails/>,
            loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`),
          },
          {
            path: "/my-toys",
            element: <PrivateRoutes><MyToys/></PrivateRoutes>,
          },
          {
            path: "/add-a-toy",
            element: <PrivateRoutes><AddAToy/></PrivateRoutes>,
          },
          {
            path: "/blogs",
            element: <Blogs></Blogs>,
          },
        ],
      },
])

export default router;