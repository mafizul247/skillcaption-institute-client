import { Zoom } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import useInstructors from '../../Hooks/useInstructors/useInstructors';

const Instructors = () => {
    const [instructors] = useInstructors();

    return (
        <>
            <Helmet>
                <title>Classes -Skillcaption Inistitue</title>
            </Helmet>
            <h2 className='my-4 text-center text-2xl font-bold text-gray-600'>Skillcaption Inistitue's Total Instructors {instructors ? instructors.length : 0}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-8">
                {instructors?.map(instructor => {
                    return (
                        <div key={instructor._id} className="space-y-2 border-[1px] p-8 bg-orange-100 cursor-pointer rounded-lg ">
                            <Zoom>
                                <img className="rounded-md h-[250px] w-full" src={instructor.image} alt="" />
                                <p className="font-semibold">Name : {instructor.name}</p>
                                <p className="font-semibold">Email : {instructor.email}</p>
                            </Zoom>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Instructors;