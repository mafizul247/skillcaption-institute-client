import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaArrowCircleLeft } from 'react-icons/fa';

const Feedback = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const handleFeedback = (event) => {
        event.preventDefault()
        const feedback = event.target.feedback.value;

        axiosSecure.patch(`/feedbackClass/${id}`, { feedback: feedback })
            .then(data => {
                console.log(data.data);
                if (data.data.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'You have given feedback successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/manageClasses')
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>Feedback - Skillcaption Inistitue</title>
            </Helmet>
            <h2 className="mb-4 text-xl font-semibold text-center uppercase">Feedback</h2>

            <form onSubmit={handleFeedback}>
                <textarea name="feedback" className="textarea textarea-bordered w-full" placeholder="Write your feedback"></textarea>
                <button className="btn btn-secondary text-white mt-4">Submit Feedback</button>
            </form>
            <div>
                <button className='btn btn-warning mt-4' onClick={() => navigate(-1)}><FaArrowCircleLeft />GO Bac</button>
            </div>
        </div>
    );
};

export default Feedback;