import React,{useEffect, useState} from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([])
    const [treatment, setTreatment] = useState(null);

    useEffect( ()=>{
        fetch('feedback.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    }, [])
    
    return (
        <div>
            <h4 className='text-4xl font-bold text-secondary text-center my-12'>OUR CLIENT REVIEWS</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    reviews.map(review=><ReviewCard 
                    key={review.id}
                    review={review}
                    setTreatment={setTreatment}
                    ></ReviewCard >)
                }
            </div>
        </div>
    );
};

export default Review;