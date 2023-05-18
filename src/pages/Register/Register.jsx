import React from 'react';
import welcomeAnimation from "../../assets/welcome.json"
import Lottie from 'lottie-react'
import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = event => {
        event.preventDefault()
    
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name, photo, email, password};
        console.log(user);
      }
    return (
        <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-[50%]">
           <div>
            <Lottie animationData={welcomeAnimation} loop={true}></Lottie>
           </div>
          </div>
          <div className="card flex-shrink-0 w-[50%] max-w-sm shadow-2xl bg-base-100">
            <div>
              <h2 className="text-center py-6 font-bold text-2xl">Welcome to <span className="text-[#EF7B84]">Toy-Verse</span></h2>
            </div>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Input your phot url only"
                  className="input input-bordered"
                />
              </div>
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
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="bg-[#EF7B84] py-3 rounded-lg text-white hover:bg-slate-700 duration-500">Register</button>
              </div>
            
                <p className="text-center mb-4"><small>Already Have An Account? <Link className="text-[#EF7B84] font-semibold" to='/login'>Login</Link></small></p>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;