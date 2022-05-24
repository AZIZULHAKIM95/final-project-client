import React from 'react';

const AddAReview = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-emerald-900 my-2'>Add A Review</h2>
            <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            <input type="text" name="name"  placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="comment" placeholder="Your Comment" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="location" placeholder="Your Location" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Upload" className="btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
    );
};

export default AddAReview;