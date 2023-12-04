import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';

const Comments = () => {
    const [comments, setComments] = useState();

    useEffect(() => {
        fetch('https://skillcaption-institue-server.vercel.app/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div className='my-8 mx-8 mt-16'>
            <div>
                <h2 className="text-center text-4xl text-gray-600 font-bold uppercase mb-4">Feedback</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                {
                    comments?.map(singleComment => {
                        return (
                            <div key={singleComment._id} className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl p-5">
                                <Zoom>
                                    <figure><img className="h-[300px] w-full" src={singleComment.image} alt="singleComment" /></figure>

                                    <div className="card-body">
                                        <h2 className="card-title">{singleComment.name}</h2>
                                        <p>{singleComment.comment}</p>
                                    </div>
                                </Zoom>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Comments;