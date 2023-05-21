import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaEdit, FaSkullCrossbones } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleToy = ({ toy, index }) => {
  const { sellerName, name, category, price, quantity, _id } = toy;

  return (
    <tr className="">
      <th className="bg-[#d7f1fa] py-10">{index + 1}</th>
      <td className="bg-[#d7f1fa] py-10">{sellerName}</td>
      <td className="bg-[#d7f1fa] py-10">
        {name.length > 10 ? name.slice(0, 10) + ".." : name}
      </td>
      <td className="bg-[#d7f1fa] py-10">{category}</td>
      <td className="bg-[#d7f1fa] py-10">$ {price}</td>
      <td className="bg-[#d7f1fa] py-10">{quantity} pcs</td>
      <td className="bg-[#d7f1fa] py-10"></td>
      <td className="bg-[#d7f1fa] py-10">
        <div className="flex flex-col">
          <Link to={`/toy_Details/${_id}`}>
            <button className="font-bold">View Details</button>
          </Link>
        </div>
      </td>
      <Toaster />
    </tr>
  );
};

export default SingleToy;
