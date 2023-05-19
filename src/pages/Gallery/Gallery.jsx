import React from 'react';
import toy1 from '../../assets/img/tengyart-FTumOdB4lsI-unsplash.jpg';
import toy2 from '../../assets/img/tengyart-FTumOdB4lsI-unsplash.jpg';
import toy3 from '../../assets/img/tengyart-FTumOdB4lsI-unsplash.jpg';
import { Transition } from '@headlessui/react';

const Gallery = () => {
  const toys = [toy1, toy2, toy3];

  return (
    <section className="px-4 py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800">Explore Our Amazing Toy Collection</h2>
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {toys.map((toy, index) => (
          <Transition
            show= {true}
            as="div"
            key={index}
            enter="transition ease-out duration-300 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-300 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={toy} alt={`Toy ${index + 1}`} className="w-full h-auto" />
            </div>
          </Transition>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
          View More
        </button>
      </div>
    </section>
  );
};

export default Gallery;
