import React from "react";
import { FaEdit, FaSkullCrossbones } from "react-icons/fa";
import { Link } from "react-router-dom";


const SingleToy = ({ toy, index }) => {
  
  const { sellerName, name, category, price, quantity, _id, photo } = toy;

  return (
    <div className="mb-4">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th className=""></th>
              <th className="capitalize">Seller Name</th>
              <th className="capitalize">Toy Name</th>
              <th className="capitalize">Sub-category</th>
              <th className="capitalize">Price</th>
              <th className="capitalize">Available Quantity</th>
              <th className="capitalize"></th>
              <th className="capitalize"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="bg-[#d7f1fa]">{index + 1}</th>
              <td className="bg-[#d7f1fa]">{sellerName}</td>
              <td className="bg-[#d7f1fa]">{name.length > 10? name.slice(0, 10) + "..": name}</td>
              <td className="bg-[#d7f1fa]">{category}</td>
              <td className="bg-[#d7f1fa]">$ {price}</td>
              <td className="bg-[#d7f1fa]">{quantity} pcs</td>
              <td className="bg-[#d7f1fa]">
                <div className="flex flex-col">
                <button title="Edit" className="my-4"><FaEdit className="h-6 w-6"/></button>
                <button title="Delete" className="my-4"><FaSkullCrossbones className="h-6 w-6" /></button>
                </div>
                </td>
              <td className="bg-[#d7f1fa]">
                <div className="flex flex-col">
               <Link to={`/toy_Details/${_id}`}><button className="font-bold">View Details</button></Link>
                </div>
                </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleToy;
