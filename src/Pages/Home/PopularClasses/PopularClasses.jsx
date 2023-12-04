import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import useClasses from '../../../hooks/useClasses/useClasses';

const PopularClasses = () => {
    const [classes] = useClasses();

    return (
        <div className='my-8 mx-8 mt-16'>
            <div>
                <h2 className="text-center text-4xl text-gray-600 font-bold uppercase mb-8">Our Popular Classes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes?.slice(0, 6).map(singleClass => {
                    return (
                        <Zoom key={singleClass._id}>
                            <div className='border-2 border-gray-100 drop-shadow-lg'>
                                <img className='w-full h-[300px] hover:opacity-20 rounded-md' src={singleClass.classImg} alt="" />
                                <h2 className='absolute top-0  bg-zinc-800 font-semibold text-white text-2xl inset-0 rounded-md opacity-0 hover:opacity-75 p-5 cursor-pointer'>{singleClass.nameClass}</h2>
                            </div>
                        </Zoom>
                    )
                })}
            </div>
            <div className='text-center'>
                <Link to='/classes'><button className='btn btn-secondary mt-4'>See All Classess</button></Link>
            </div>
        </div>
    );
};

export default PopularClasses;