import React, { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'

const Blogs = () => {
  useEffect(()=> {
    Aos.init(2000)
  },[])
    return (
        <div className='my-12' data-aos = "fade-right">
           <div className='my-4 bg-slate-300 px-6'>
           <h1 className='text-3xl'>Q: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p className=' py-4 text-gray-500 '><span className='text-gray-950 font-bold mr-3'>Ans:</span> Access token and refresh token are used for authentication. <br />Access Token: An access token is a credential that is used to access protected resources or perform actions on behalf of a user. <br />
            Refresh Token: A refresh token is a long-lived credential that is used to obtain a new access token after the original access token expires. </p>
           </div>
           <div className='my-4 bg-slate-300 px-6'>
           <h1 className='text-3xl'>Q: Compare SQL and NoSQL databases?</h1>
            <p className=' py-4 text-gray-500 '><span className='text-gray-950 font-bold mr-3'>Ans:</span> SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems, each with its own set of characteristics and use cases. </p>
           </div>
           <div className='my-4 bg-slate-300 px-6'>
           <h1 className='text-3xl'>Q: What is express js? What is Next JS?</h1>
            <p className=' py-4 text-gray-500 '><span className='text-gray-950 font-bold mr-3'>Ans:</span> Express.js is a popular web application framework for Node.js. It provides a robust set of features and tools for building web applications and APIs. Express.js simplifies the process of creating server-side applications by providing a lightweight and flexible framework that handles routing, middleware, and HTTP requests/responses.
            <br />
            Next.js is often used for building complex web applications with server-rendered React components, while Express.js is commonly used for creating lightweight web servers and building RESTful APIs. However, it's worth noting that Next.js can be used in conjunction with Express.js to handle specific server-side functionality within a Next.js application.
             </p>
           </div>
           <div className='my-4 bg-slate-300 px-6'>
           <h1 className='text-3xl'>Q: What is MongoDB aggregate and how does it work?</h1>
            <p className=' py-4 text-gray-500 '><span className='text-gray-950 font-bold mr-3'>Ans:</span> In MongoDB, the aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and transform data within the database, combining multiple stages of operations to produce aggregated results.
             </p>
           </div>
        </div>
    );
};

export default Blogs;