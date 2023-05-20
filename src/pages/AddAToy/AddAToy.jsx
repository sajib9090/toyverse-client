import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const AddAToy = () => {

    const { user } = useContext(AuthContext);

    console.log(user.displayName);

    const handleAdd =(event)=> {
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
        
        fetch("http://localhost:5000/toys", {
            method: "Post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productInformation)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Added successfully.')
        })

    }
  return (
    <div className="my-6 bg-[#f7c9cd] py-12">
      <div className="w-[70%] bg-white mx-auto shadow-xl">
        <div className="py-10 px-4 ">
          <h2 className="text-4xl font-bold text-[#68B5D2]">Add A Toy.</h2>
          <h1 className="text-xl font-semibold py-3 text-[#EF7B84]">
            Let's add your Toy.
          </h1>
        </div>
        <form onSubmit={handleAdd}>
          <div className="grid grid-cols-2 gap-6 px-6">
            <div>
              <div>
                <label className="text-[#68B5D2] font-bold" htmlFor="name">
                  Toy Name
                </label>
                <br />
                <input
                  className="w-[100%] mt-3 mb-2 input input-bordered"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Toy name"
                  required
                />
              </div>
              <div>
                <label className="text-[#68B5D2] font-bold" htmlFor="price">
                  Price
                </label>
                <br />
                <input
                  className="w-[100%] mt-3 mb-2 input input-bordered"
                  type="text"
                  name="price"
                  id=""
                  placeholder="Price"
                  required
                />
              </div>
              <div>
                <label className="text-[#68B5D2] font-bold" htmlFor="rating">
                  Rating
                </label>
                <br />
                <input
                  className="w-[100%] mt-3 mb-2 input input-bordered"
                  type="text"
                  name="rating"
                  id=""
                  placeholder="Rating"
                  required
                />
              </div>
              <div>
                <label className="text-[#68B5D2] font-bold" htmlFor="quantity">
                  Available quantity
                </label>
                <br />
                <input
                  className="w-[100%] mt-3 mb-2 input input-bordered"
                  type="number"
                  name="quantity"
                  id=""
                  placeholder="Quantity"
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label
                  className="text-[#68B5D2] font-bold"
                  htmlFor="sellerName"
                >
                  Seller name
                </label>
                <br />
                <input
                  className="w-[100%] mt-3 mb-2 input input-bordered"
                  type="text"
                  name="sellerName"
                  id=""
                  placeholder="Seller Name"
                  defaultValue={user?.displayName}
                  required
                />
              </div>
              <div>
                <label
                  className="text-[#68B5D2] font-bold"
                  htmlFor="sellerEmail"
                >
                  Seller email
                </label>
                <br />
                <input
                  className="w-[100%] mt-3 mb-2 input input-bordered"
                  type="email"
                  name="sellerEmail"
                  id=""
                  placeholder="Seller Email"
                  defaultValue={user?.email}
                  required
                />
              </div>
              <div>
                <label className="text-[#68B5D2] font-bold" htmlFor="category">
                  Sub-Category
                </label>
                <br />
                <select name="category" id="" required className="w-[100%] mt-3 mb-2 input input-bordered">
                  <option value="" disabled>select</option>
                  <option value="baby_dolls">Baby Dolls</option>
                  <option value="barbie">barbie</option>
                  <option value="american_girl">American girl</option>
                </select>
              </div>
              <div>
                <label className="text-[#68B5D2] font-bold" htmlFor="photo">
                  Photo URL
                </label>
                <br />
                <input
                  className="w-[100%] mt-3 mb-2 input input-bordered"
                  type="text"
                  name="photo"
                  id=""
                  placeholder="Photo URL"
                  required
                />
              </div>
            </div>
          </div>
          <div className="px-6">
            <label className="text-[#68B5D2] font-bold" htmlFor="description">
            Detail description
            </label>
            <br />
            <textarea
            cols="50"
              className="w-[100%] mt-3 mb-2 input input-bordered"
              type="text"
              name="description"
              id=""
              placeholder="Describe about your product"
              required
            />
            <br />
            <input
              className="bg-[#EF7B84] w-[100%] mb-6 mt-4 py-2 text-white hover:bg-[#68B5D2] cursor-pointer duration-500 rounded-lg"
              type="submit"
              value="Add A Toy"
            />
          </div>
        </form>
      </div>
      <Toaster/>
    </div>
  );
};

export default AddAToy;
