import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const AddAReview = () => {

    const handleSubmitReview = (e) => {
        e.preventDefault();
        const review = {
            location: e.target.children.location.value,
            name: e.target.children.name.value,
            comment: e.target.children.comment.value
        }
        const url = process.env.REACT_APP_API_URL;
        axios.post(url+"/reviews",review)
        .then(res=>{
            const {success} = res.data
            if(success){
                toast.success("Review Added Successfully");
            }
            else{
                toast.error("Couldn't add review");
            }
        })
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-emerald-900 my-2'>Add A Review</h2>
            <form onSubmit={handleSubmitReview} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="comment" placeholder="Your Comment" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="location" placeholder="Your Location" className="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Upload" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddAReview;