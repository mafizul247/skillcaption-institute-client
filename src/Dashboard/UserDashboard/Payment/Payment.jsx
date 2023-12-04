import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Key);


const Payment = () => {
    const { id } = useParams();
    return (
        <div className='mx-12'>
            <h2 className="text-3xl text-center font-semibold">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm id={id} />
            </Elements>
        </div>
    );
};

export default Payment;