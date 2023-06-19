import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./ToyDetails.css";
import Aos from "aos";
import 'aos/dist/aos.css'

const ToyDetails = () => {
  const details = useLoaderData();
  const {name, photo, sellerName, sellerEmail, price, rating, description} = details;

  useEffect(()=> {
    Aos.init(2000)
  },[])

  return (
    <div className="px-8 py-8 details-section" data-aos = "fade-right">
      <section className="product">
        <div className="product__photo">
          <div className="photo-container">
            <div className="photo-main">
              <img
              className="object-contain h-[400px]"
                src={photo}
              />
            </div>
          </div>
        </div>
        <div className="product__info">
          <div className="title">
            <h1>{name.length > 20? name.slice(0, 20): name}</h1>
            <span>Seller: {sellerName}</span>
          </div>
          <div className="price">
            $ <span>{price}</span>
          </div>
          <div className="variant">
            <h3>rating: {rating}</h3>
          </div>
          <div className="description">
            <h3>Seller Email: {sellerEmail}</h3>
            <ul>
              Description:
              <br />
              <p>{description.length > 300? description.slice(0, 300): description}</p>
            </ul>
          </div>
          
        </div>
      </section>

      <div className="text-center">
        <Link to='/'><button className="bg-[#EF7B84] px-4 py-2 rounded-md text-white">Go Home</button></Link>
      </div>
    </div>
  );
};

export default ToyDetails;
