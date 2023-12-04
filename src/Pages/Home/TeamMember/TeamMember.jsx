import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';

const TeamMember = () => {
    const [team, setTeam] = useState();

    useEffect(() => {
        fetch('https://skillcaption-institue-server.vercel.app/team')
            .then(res => res.json())
            .then(data => setTeam(data))
    }, [])

    return (
        <div className='my-8 mx-8 mt-16'>
            <div>
                <h2 className="text-center text-4xl text-gray-600 font-bold uppercase mb-8">Our Team Member</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                {
                    team?.map(person => {
                        return (
                            <div key={person._id} className="card card-compact w-full lg:w-96 bg-orange-100 shadow-xl p-5">
                                <Slide>
                                    <figure><img className="h-[300px] w-full" src={person.image} alt="feedback" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{person.name}</h2>
                                        <p >{person.position}</p>
                                    </div>
                                </Slide>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TeamMember;