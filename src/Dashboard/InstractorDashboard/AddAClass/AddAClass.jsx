import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const img_key = import.meta.env.VITE_IMG_KEY;

const AddAClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_key}`
    // console.log(img_key, img_hosting_url);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const classImg = event.target.img.files[0]
        const instructorName = event.target.instructorName.value;
        const email = event.target.instructorEmail.value;
        const nameClass = event.target.classname.value;
        const price = event.target.price.value;
        const seats = event.target.availableSeats.value;

        const formData = new FormData();
        formData.append('image', classImg);
        // console.log(formData);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    // console.log(data);
                    const classImg = data.data.display_url;
                    const newClass = {
                        instructorName,
                        classImg,
                        email,
                        nameClass,
                        price,
                        seats,
                        status: 'pending'
                    }
                    axiosSecure.post('/addNewClass', newClass)
                        .then(data => {
                            // console.log(data.data);
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Your added class successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate('/dashboard/myClasss');
                        })

                    // console.log(newClass);
                }
            })

    }

    return (
        <div>
            <Helmet>
                <title>Add Class -Skillcaption Inistitue</title>
            </Helmet>
            <div className=" flex-col lg:flex-row-reverse">

                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Instructor Name</span>
                                </label>
                                <input value={user?.displayName ? user?.displayName : ''} name='instructorName' type="text" placeholder="Instructor name" className="input input-bordered" required readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Instructor Email</span>
                                </label>
                                <input value={user?.email} name='instructorEmail' type="email" placeholder="Instructor email" className="input input-bordered" required readOnly />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Class Name</span>
                                </label>
                                <input name='classname' type="text" placeholder="Class name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Available Seats</span>
                                </label>
                                <input name='availableSeats' type="text" placeholder="Available seats" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Price</span>
                                </label>
                                <input name='price' type="text" placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Class Image</span>
                                </label>
                                <input name='img' type="file" className="file-input file-input-bordered w-full " required />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className='btn btn-secondary text-white'>Add A Class</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAClass;