import React from "react";
import { FaCcMastercard, FaCcVisa, FaCcPaypal, FaCcAmex, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaMailBulk, FaSearchLocation } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#F1F8FF] text-base-content">
        <div>
          <span className="footer-title text-[#eb5662] text-xl capitalize">Contact us</span>
          <address className="flex items-center"><FaSearchLocation className="mr-2"></FaSearchLocation> No: 58 A, East Madison Street, Baltimore, MD, USA 4508</address>
          <a className="flex items-center" href="tel:+9112345678"> <FaPhoneAlt className="mr-2"></FaPhoneAlt> +91 12345678</a>
          <a className="flex items-center" href="mailto:xyz@abc.com"><FaMailBulk className="mr-2"></FaMailBulk> mailto:xyz@abc.com</a>
          <div className="flex items-center space-x-4 text-4xl">
            <p><FaCcMastercard className="hover:scale-125 duration-500"></FaCcMastercard></p>
            <p><FaCcVisa className="hover:scale-125 duration-500"></FaCcVisa></p>
            <p><FaCcPaypal className="hover:scale-125 duration-500"></FaCcPaypal></p>
            <p><FaCcAmex className="hover:scale-125 duration-500"></FaCcAmex></p>
          </div>
        </div>
        <div>
          <span className="footer-title text-[#eb5662] text-xl capitalize">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-[#eb5662] text-xl capitalize">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-[#eb5662] text-xl capitalize">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title text-[#eb5662] text-xl capitalize">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn hover:outline-none hover:bg-[#eb5662] absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
          <span className="footer-title text-[#eb5662] text-xl capitalize">Connect with us</span>
          <div className="flex items-center space-x-4 text-xl">
          <p><FaTwitter className="hover:scale-125 hover:text-[#eb5662] duration-500"></FaTwitter></p>
          <p><FaFacebookF className="hover:scale-125 hover:text-[#eb5662] duration-500"></FaFacebookF></p>
          <p><FaInstagram className="hover:scale-125 hover:text-[#eb5662] duration-500"></FaInstagram></p>
          <p><FaLinkedin className="hover:scale-125 hover:text-[#eb5662] duration-500"></FaLinkedin></p>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-[#E8EFF6] text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by <span className="text-[#eb5662]">Toy-Verse</span></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
