import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleToy from "../SingleToy/SingleToy";
import Swal from "sweetalert2";
import Aos from "aos";
import 'aos/dist/aos.css'

const AllToys = () => {
  const toys = useLoaderData();

  const [allToys, setAllToys] = useState(toys);
  const [searchText, setSearchText] = useState("");
  useEffect(()=> {
    Aos.init(2000)
  },[])

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
        fetch(`https://toyverse-server-folisonjayson-gmailcom.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            console.log(data);

            const remaining = allToys.filter((toy) => toy._id != _id);
            setAllToys(remaining);
          });
      }
    });
  };
  
  const handleSearch = () => {
    fetch(`https://toyverse-server-folisonjayson-gmailcom.vercel.app/toySearchByName/${searchText}`)
     .then(res => res.json())
     .then(data => {
      console.log(data);
      setAllToys(data)
     })
  }

  return (
    <div data-aos = "fade-right">
      <div className="text-center py-10 ">
        <h2 className="text-[#68B5D2] text-3xl font-bold">
          All Toys Collections
        </h2>
        <h3 className="text-[#4A4A4B] font-bold text-6xl py-6">Find yours</h3>
      </div>
      <div className="text-right py-10">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="search by name"
            className="py-1 px-4 rounded-md"
          />{" "}
          <button className="bg-[#EF7B84] py-1 px-4 rounded-md text-white hover:bg-[#68B5D2] duration-500" onClick={handleSearch}>Search</button>
        </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th className="">#</th>
              <th className="capitalize">Seller Name</th>
              <th className="capitalize">Toy Name</th>
              <th className="capitalize">Sub-category</th>
              <th className="capitalize">Price</th>
              <th className="capitalize">Available Quantity</th>
              <th className="capitalize"></th>
              <th className="capitalize"></th>
            </tr>
          </thead>
          <tbody className="">
            {allToys &&
              allToys?.map((toy, index) => (
                <SingleToy
                  key={toy._id}
                  toy={toy}
                  index={index}
                  handleDelete={handleDelete}
                ></SingleToy>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
