import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

function Banner2() {
  useEffect(()=> {
    Aos.init(2000)
  },[])
  return (
    <div className="my-36" data-aos = "fade-right">
        <div>
            <h1 className="text-center font-bold my-12 text-5xl">Find your desire Toys</h1>
            <p className="text-center text-xl">from</p>
            <h3 className="text-center text-xl">Gallery </h3>
        </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2016/08/07/11/18/barbie-1576062_1280.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2017/10/24/15/23/toy-2884919_1280.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2019/03/16/17/40/retro-4059313_1280.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2016/12/23/00/22/doll-1926593_1280.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2019/03/17/19/58/doll-4061815_1280.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2016/08/12/23/24/violin-1589983_1280.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
