import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import ErrorPage from '../pages/Shared/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';
import AllToys from '../pages/AllToys/AllToys';
import MyToys from '../pages/MyToys/MyToys';
import AddAToy from '../pages/AddAToy/AddAToy';
import Blogs from '../pages/Blogs/Blogs';
import Register from '../pages/Register/Register';
import PrivateRoutes from './PrivateRoutes';

import Home from '../pages/Home/Home/Home';
import UpdateToy from '../pages/UpdateToy/UpdateToy';
import ToyDetails from '../pages/ToyDetails/ToyDetails';

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
            loader: () => fetch(`https://toyverse-server-folisonjayson-gmailcom.vercel.app/toys`),
          },
          {
            path: "/toy_Details/:id",
            element: <PrivateRoutes><ToyDetails/></PrivateRoutes>,
            loader: ({params}) => fetch(`https://toyverse-server-folisonjayson-gmailcom.vercel.app/toys/${params.id}`),
          },
          {
            path: "/update/:id",
            element: <PrivateRoutes><UpdateToy/></PrivateRoutes>,
            loader: ({params}) => fetch(`https://toyverse-server-folisonjayson-gmailcom.vercel.app/toys/${params.id}`),
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