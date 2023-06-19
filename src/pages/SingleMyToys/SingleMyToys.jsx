import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaSkullCrossbones } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import Aos from "aos";
import 'aos/dist/aos.css'

const SingleMyToys = ({ my, index, handleDelete, handleUpdate }) => {
  const {
    photo,
    name,
    sellerName,
    sellerEmail,
    _id,
    price,
    rating,
    quantity,
    description,
    category,
  } = my;

  useEffect(()=> {
    Aos.init(2000)
  },[])
  return (
      <tr className="my-4" data-aos = "fade-right">
        <th className="bg-[#d7f1fa]">{index + 1}</th>
        <td className="bg-[#d7f1fa]">{sellerName}</td>
        <td className="bg-[#d7f1fa]">
          {name.length > 10 ? name.slice(0, 10) + ".." : name}
        </td>
        <td className="bg-[#d7f1fa]">{category}</td>
        <td className="bg-[#d7f1fa]">$ {price}</td>
        <td className="bg-[#d7f1fa]">{quantity} pcs</td>
        <td className="bg-[#d7f1fa]">
          <div className="flex flex-col">
            <Link to={`/update/${_id}`}>
              <button title="Edit" className="my-4">
                <FaEdit className="h-6 w-6" />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              title="Delete"
              className="my-4"
            >
              <FaSkullCrossbones className="h-6 w-6" />
            </button>
          </div>
        </td>
        <td className="bg-[#d7f1fa]">
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

export default SingleMyToys;
