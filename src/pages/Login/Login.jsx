import React from "react";
import loginAnimation from "../../assets/login.json"
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import Lottie from 'lottie-react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-[50%]">
           <div>
            <Lottie animationData={loginAnimation} loop={true}></Lottie>
           </div>
          </div>
          <div className="card flex-shrink-0 w-[50%] max-w-sm shadow-2xl bg-base-100">
            <div>
              <h2 className="text-center py-6 font-bold text-2xl">Welcome to <span className="text-[#EF7B84]">Toy-Verse</span></h2>
            </div>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="bg-[#EF7B84] py-3 rounded-lg text-white hover:bg-slate-700 duration-500">Login</button>
              </div>
              <div>
                <h3 className="text-center pt-6">Or sign in with</h3>
                <div className="flex justify-center space-x-6 py-6">
                    <FaGoogle className="w-6 h-6 cursor-pointer hover:scale-125 duration-500"></FaGoogle>
                    <FaGithub className="w-6 h-6 cursor-pointer hover:scale-125 duration-500"></FaGithub>
                    <FaFacebook className="w-6 h-6 cursor-pointer hover:scale-125 duration-500"></FaFacebook>
                </div>
                <p className="text-center mb-4"><small>New to Toy-Verse? <Link className="text-[#EF7B84] font-semibold" to='/register'>Create Account</Link></small></p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
