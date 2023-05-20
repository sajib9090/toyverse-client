import React from "react";
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from "react-router-dom";


const SingleToy = ({ toy }) => {
  
  const { sellerName, name, category, price, quantity, _id, photo} = toy;

  return (
    <div className="">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-24">
                      <img
                        src={photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                  {name?.length > 30 ? name?.slice(0, 30) + '.....' : name}
                  </div>
                </div>
              </td>
              <td>
                <p className="font-bold"><span className="mr-2 text-[#6e6e6e]">Category: </span>
                {category}</p>
                <br />
                <span className="badge badge-ghost badge-sm flex flex-col">
                    <p className="py-2">Price: $ {price}</p>
                  
                  <p>Seller Name: {sellerName}</p>
                </span>
              </td>
              <td><span>Available Quantity:</span>{quantity}pcs</td>
              <th>
            <Link to={`/toy_Details/${_id}`}><button className="btn btn-ghost btn-xs bg-[#EF7B84] text-white">View Details <FaArrowCircleRight className="ml-2" /></button></Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleToy;
