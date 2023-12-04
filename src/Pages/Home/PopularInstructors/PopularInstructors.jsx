import React from 'react';
import useInstructors from '../../../Hooks/useInstructors/useInstructors';
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const PopularInstructors = () => {
    const [instructors] = useInstructors();

    return (
        <div className='my-8 mx-8 mt-16'>
            <div>
                <h2 className="text-center text-4xl text-gray-600 font-bold uppercase mb-8">Our Popular Instructors</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instructors?.slice(0, 6).map(instructor => {
                    return (
                        <div key={instructor._id} className='border-2 border-gray-100 drop-shadow-lg'>
                            <Slide>
                                <img className='w-full h-[300px] hover:opacity-20 rounded-md' src={instructor.image} alt="" />
                            </Slide>
                            <h2 className='absolute top-0  bg-zinc-800 font-semibold text-white text-2xl inset-0 rounded-md opacity-0 hover:opacity-75 p-5 cursor-pointer'>{instructor.name}</h2>
                        </div>
                    )
                })}
            </div>
            <div className='text-center'>
                <Link to='/instructor'><button className='btn btn-secondary mt-4'>See All Instructors</button></Link>
            </div>
        </div>
    );
};

export default PopularInstructors;