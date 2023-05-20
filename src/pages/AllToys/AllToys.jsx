import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleToy from "../SingleToy/SingleToy";
import Swal from "sweetalert2";

const AllToys = () => {
  const toys = useLoaderData();

  const [allToys, setAllToys] = useState(toys)

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            console.log(data);

            const remaining = allToys.filter(toy => toy._id != _id)
            setAllToys(remaining)
          });
      }
    });
  };
// console.log(allToys);


  return (
    <div>
      <div className="text-center py-10 ">
        <h2 className="text-[#68B5D2] text-3xl font-bold">
          All Toys Collections
        </h2>
        <h3 className="text-[#4A4A4B] font-bold text-6xl py-6">Find yours</h3>
      </div>
      <div className="">
        {allToys &&
          allToys?.map((toy, index) => (
            <SingleToy
              key={toy._id}
              toy={toy}
              index={index}
              handleDelete={handleDelete}
            ></SingleToy>
          ))}
      </div>
    </div>
  );
};

export default AllToys;
