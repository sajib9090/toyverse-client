import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
  const details = useLoaderData();
  const [rating, setRating] = useState(details.rating) 
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-[40%]">
          <img
            src={details.photo}
            alt="Album"
          />
        </figure>
        <div className="card-body w-[60%]">
          <h2 className="card-title">{details.name}</h2>
          <p>{details.sellerName}</p>
          <p>{details.sellerEmail}</p>
          <p>{details.price}</p>
          <p><Rating style={{ maxWidth: 150 }} value={rating} />{details.rating}</p>
          <p>{details.quantity}</p>
          <p>{details.description}</p>
          <div className="card-actions justify-end">
            <Link to='/all-toys'><button className="btn btn-primary">Go to All Toys</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
