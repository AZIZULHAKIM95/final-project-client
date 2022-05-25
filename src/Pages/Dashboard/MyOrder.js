import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrder = () => {
    const [ppp, setPPP] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            const url = "http://192.168.0.114:5000"
            fetch(url+`/orders/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data);
                    setPPP(data);
                });
        }
    },
        [user])
    return (
        <div>
            <h2 className='text-2xl font-bold text-emerald-900 my-2'>My Order: {ppp.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            ppp.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.quantity}</td>
                                <td>{a.quantity* a.price}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.paid}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;