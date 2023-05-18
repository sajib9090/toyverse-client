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
            path: "/all-toys",
            element: <AllToys/>,
          },
          {
            path: "/my-toys",
            element: <MyToys/>,
          },
          {
            path: "/add-a-toy",
            element: <AddAToy/>,
          },
          {
            path: "/blogs",
            element: <Blogs></Blogs>,
          },
        ],
      },
])

export default router;