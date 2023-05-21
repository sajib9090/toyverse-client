import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SingleMyToys from "../SingleMyToys/SingleMyToys";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-hot-toast";


const MyToys = () => {
  const { user } = useContext(AuthContext);
  

  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, []);


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

            const remaining = myToys.filter(toy => toy._id != _id)
            setMyToys(remaining)
          });
      }
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const productInformation = {name, price, rating, quantity, sellerName, sellerEmail, category, photo, description}
    if(price < 0 || isNaN(price)){
        toast.error('Price should be positive value')
        return
    }

    if(rating < 0 || isNaN(rating)){
        toast.error('Rating should be positive value')
        return
    }
    if(quantity < 0){
        toast.error('Quantity should be positive value')
        return
    }
    fetch(`http://localhost:5000/toys/${data._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(productInformation)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            toast.success('Updated')
        }
    })

}

  
  return (
     <div>
      <div className="text-center mt-14 mb-32">
        <h1 className="font-bold text-5xl">My Toys</h1>
      </div>
      <div className=" my-12">
        {
            myToys && myToys?.map((my, index) => <SingleMyToys key={my._id} my={my} index={index} handleDelete={handleDelete} handleUpdate={handleUpdate}/>)
        }
     </div>
     </div>
  );
};

export default MyToys;
