import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from '../SingleToy/SingleToy';

const AllToys = () => {

    const toys = useLoaderData()

    return (
        <div>
            <div className='text-center py-10 '>
                <h2 className='text-[#68B5D2] text-3xl font-bold'>All Toys Collections</h2>
                <h3 className='text-[#4A4A4B] font-bold text-6xl py-6'>Find yours</h3>
            </div>
            <div className='grid grid-cols-1 gap-12 py-10 px-6 bg-[#bdd8e2]'>
                {
                  toys && toys?.map(toy => <SingleToy key = {toy._id} toy = {toy}></SingleToy>)
                }
            </div>
        </div>
    );
};

export default AllToys;