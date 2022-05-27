import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const ManageAllProduct = () => {
    const [user] = useAuthState(auth);

    const [products, setproducts] = useState([]);
    const [update, setUpdate] = useState(false);


    const url = process.env.REACT_APP_API_URL;


    useEffect(() => {
        if (user) {
            axios.get(url + "/products")
                .then(res => {
                    setproducts(res.data.data);
                });
        }

    },
        [user, update]);

    const handleDelete = id => {

        axios.delete(url + `/product/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            const { data } = res;
            if (data.deletedCount) {
                setUpdate(!update);
                return toast.success("Item Deleted");
            }
            toast.error("Can't delete the item")
        })

    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-emerald-900 my-2'>Manage All Product</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Available Quantity</th>
                            <th>Price/unit</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.stock}</td>
                                <td>{a.price}</td>
                                <td>
                                    <div>
                                        <button onClick={() => handleDelete(a._id)}
                                            className="btn modal-button bg-red-600" >
                                            Delete
                                        </button>
                                    </div>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllProduct;