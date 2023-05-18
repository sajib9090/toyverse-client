import React, { useContext } from "react";
import loginAnimation from "../../assets/login.json"
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Lottie from 'lottie-react'
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const { googleLogin } = useContext(AuthContext)

  const handleLogin = event => {
    event.preventDefault()

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email, password};
    console.log(user);
  }

  const handleGoogleLogin = () => {
    googleLogin()
    .then((result) => {
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-[50%]">
           <div>
            <Lottie animationData={loginAnimation} loop={true}></Lottie>
           </div>
          </div>
          <div className="card flex-shrink-0 w-[50%] max-w-sm shadow-2xl bg-base-100">
            <div>
              <h2 className="text-center py-6 font-bold text-2xl">Login into <span className="text-[#EF7B84]">Toy-Verse</span></h2>
            </div>
            <form onSubmit={handleLogin} className="card-body">
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
                  <p className="label-text-alt link link-hover text-red-700">
                    Forgot password?
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="bg-[#EF7B84] py-3 rounded-lg text-white hover:bg-slate-700 duration-500">Login</button>
              </div>
              <div>
                <h3 className="text-center pt-6">Or sign in with</h3>
                <div className="flex justify-center space-x-6 py-6">
                    <FaGoogle onClick={handleGoogleLogin} className="w-6 h-6 cursor-pointer hover:scale-125 duration-500"></FaGoogle>
                    <FaGithub className="w-6 h-6 cursor-pointer hover:scale-125 duration-500"></FaGithub>
                </div>
                <p className="text-center mb-4"><small>New to Toy-Verse? <Link className="text-[#EF7B84] font-semibold" to='/register'>Create Account</Link></small></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
