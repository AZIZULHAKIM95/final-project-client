import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {

    const [user] = useAuthState(auth);

    const handleAddProduct = (e) => {
        e.preventDefault();
        const product = {
            name: e.target.children.name.value,
            img: e.target.children.img.value,
            description: e.target.children.des.value,
            minimumOrder: parseInt(e.target.children.minodr.value),
            stock: parseInt(e.target.children.stock.value),
            price: parseInt(e.target.children.price.value)
        }
        console.log(product);

        if (product.name && product.img && product.description && product.minimumOrder &&
            product.stock && product.price) {

            const url = process.env.REACT_APP_API_URL;

            axios.post(url + `/products`, product, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
            )
                // fetch(url + `/products`, {
                //     method: 'POST',
                //     ,
                //     body: JSON.stringify(product)
                // })
                // .then(res => {
                //     if (res.status === 401 || res.status === 403) {
                //         toast.error("Admin permission needed to add product");
                //         signOut(auth);
                //         localStorage.removeItem('accessToken');
                //         Navigate('/');
                //     }
                //     return res.json()
                // })
                .then(data => {
                    const { success } = data.data;
                    if (success) {
                        toast.success("Product Added Successfully");

                        e.target.children.forEach(c => {
                            c.value = "";
                        })
                    }
                    else {
                        toast.error("Couldn't add Your product");
                    }
                    console.log(data);
                });
        }
        else {
            toast.error("Please enter valid product!");
        }

    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-emerald-900 my-2'>Add A New Product</h2>
            <form onSubmit={handleAddProduct}
                className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="des" placeholder="Product Description" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="minodr" placeholder="Minimum Order" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="stock" placeholder="Available Stock" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="price" placeholder="Per Unit Price" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="img" placeholder="Image Link" className="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Upload" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddProduct;