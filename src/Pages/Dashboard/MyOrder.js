import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyOrder = () => {
    const [ppp, setPPP] = useState([]);
    const [update,setUpdate] = useState(false);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const url = "http://192.168.0.116:5000"

    const updateOrder = (id,type)=>{

        axios.delete(url + `/order/${id}/${type}`,{
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        ).then(res => {
            const {success} = res.data;
            if(success){
                setUpdate(!update);
                return toast.success(`Order ${type}ed`)
            }
            toast.error(`Can't ${type} your product`)

        })
    }

    useEffect(() => {
        if (user) {
            fetch(url + `/orders/${user.email}`, {
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
        [user,update])
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
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            ppp.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.quantity}</td>
                                <td>{a.quantity * a.price}</td>
                                <td>
                                    {!a.paid && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs bg-emerald-500'>pay</button></Link>}
                                    {a.paid && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.paid}</span></p>
                                    </div>}
                                </td>
                                <td>
                                    
                                        {!a.paid && <button onClick={()=>updateOrder(a._id,'cancel')} className='btn btn-xs bg-red-500'>cancel</button>}
                                        {a.paid &&
                                            <button onClick={()=>updateOrder(a._id,'delete')} className='btn btn-xs bg-red-500'>Delete</button>
                                        }
                                    
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