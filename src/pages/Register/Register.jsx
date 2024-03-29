import React, { useContext, useEffect, useState } from 'react';
import welcomeAnimation from "../../assets/welcome.json"
import Lottie from 'lottie-react'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Toaster, toast } from 'react-hot-toast';
import Aos from "aos";
import 'aos/dist/aos.css'

const Register = () => {

    const { registerUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')

    useEffect(()=> {
      Aos.init(2000)
    },[])

    const handleRegister = event => {
        event.preventDefault()
    
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        registerUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            toast.success('Registration success')
            form.reset()
            updateUserProfile(user, name, photo)
            setError('')
            navigate('/login')

           
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage)
          });
      }

      const updateUserProfile = (user, name, photo) => {
        updateProfile(user, {
          displayName: name,
          photoURL: photo
        })
        .then(() => {
          console.log('updated');
        })
        .catch(error => {
          console.log(error);
        })
      }
    return (
        <div data-aos = "fade-right">
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
                  required
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
                  required
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
                  required
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="label-text-alt text-red-600">
                    {error}
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="bg-[#EF7B84] py-3 rounded-lg text-white hover:bg-slate-700 duration-500">Register</button>
              </div>
            
                <p className="text-center mb-4"><small>Already Have An Account? <Link className="text-[#EF7B84] font-semibold" to='/login'>Login</Link></small></p>
            </form>
            </div>
          </div>
        </div>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      </div>
    );
};

export default Register;