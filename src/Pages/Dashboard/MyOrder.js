import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [ppp, setPPP] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch('products.json')
                .then(res => res.json())
                .then(data => setPPP(data));
        }
    }, [user])
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
                        ppp.map((a, index) =><tr>
                            <th>{index + 1}</th>
                            <td>{a.name}</td>
                            <td>{a.minimumOrder}</td>
                            <td>{a.minimumOrder * a.price}</td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrder;