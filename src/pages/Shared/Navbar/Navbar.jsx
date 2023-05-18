import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to='/'>
        <a href="" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Toy-Verse" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Toy-Verse</span>
        </a>
        </Link>
        <div className="flex items-center">
        <NavLink to='/login' className={({ isActive }) =>
                      isActive
                        ? "text-[#EF7B84] dark:text-white hover:underline cursor-pointer text-base font-semibold"
                        : "text-gray-900 dark:text-white hover:underline cursor-pointer text-base font-semibold"
                    }>
                Login
                </NavLink>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-base">
                <NavLink to='/' className={({ isActive }) =>
                      isActive
                        ? "text-[#EF7B84] dark:text-white hover:underline cursor-pointer"
                        : "text-gray-900 dark:text-white hover:underline cursor-pointer"
                    }>
                Home
                </NavLink>
                <NavLink to='/all-toys' className={({ isActive }) =>
                      isActive
                        ? "text-[#EF7B84] dark:text-white hover:underline cursor-pointer"
                        : "text-gray-900 dark:text-white hover:underline cursor-pointer"
                    }>
                All Toys
                </NavLink>
                <NavLink to='/my-toys' className={({ isActive }) =>
                      isActive
                        ? "text-[#EF7B84] dark:text-white hover:underline cursor-pointer"
                        : "text-gray-900 dark:text-white hover:underline cursor-pointer"
                    }>
                My Toys
                </NavLink>
                <NavLink to='/add-a-toy' className={({ isActive }) =>
                      isActive
                        ? "text-[#EF7B84] dark:text-white hover:underline cursor-pointer"
                        : "text-gray-900 dark:text-white hover:underline cursor-pointer"
                    }>
                Add A Toy
                </NavLink>
                <NavLink to='/blogs' className={({ isActive }) =>
                      isActive
                        ? "text-[#EF7B84] dark:text-white hover:underline cursor-pointer"
                        : "text-gray-900 dark:text-white hover:underline cursor-pointer"
                    }>
                Blogs
                </NavLink>
            </ul>
        </div>
    </div>
</nav>

    </div>
  );
};

export default Navbar;
