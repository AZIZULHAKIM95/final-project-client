import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51K1yQAFDDkrJ7nh05DjfmIdAQsCq2SCyCveJLNpzuB2PKzAryl8Sl3ZezDxrmZ5CZF02BzR8Jyz4bUZ6xqakXN8W00UQSI3tmP');

const Payment = () => {
    const { id } = useParams();
    let url = "http://192.168.0.116:5000";
    const [order, setOrder] = useState({});
    url += `/order/${id}`;

    useEffect(()=>{
        axios.get(url,{
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>setOrder(res.data));
    },[]);
    
    console.log(order);
    
    if (!order.user) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center'>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.user}</p>
                    <h2 class="card-title">Please Pay for {order.product.name}</h2>
                    <p>Your Quantity: <span className='text-orange-700'>{order.quantity}</span></p>
                    <p className='mb-5'>Please pay: ${order.product.price*order.quantity}</p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
            
        </div>
    );
};

export default Payment