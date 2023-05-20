import React from "react";
import { Link } from "react-router-dom";

const Toys = ({ c }) => {
  console.log(c);
  const {_id, name, price, rating, photo } = c

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name.length > 30 ? name.slice(0, 30) + "...." : name}</h2>
          <p>price: {price}</p>
          <p>rating: {rating}</p>
          <div className="card-actions">
            <Link to={`toy_Details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toys;
