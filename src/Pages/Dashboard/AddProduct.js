import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-emerald-900 my-2'>Add A New Product</h2>
            <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            <input type="text" name="name"  placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="name" placeholder="Product Description" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="number" placeholder="Minimum Order" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="number" placeholder="Available Stock" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="number" placeholder="Per Unit Price" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="link" placeholder="Image Link" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Upload" className="btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
    );
};

export default AddProduct;