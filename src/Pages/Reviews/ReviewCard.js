import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex items-center">
                    <div className="avatar">
                    </div>
                    <div>
                        <h4 className='text-2xl'>{review.name}</h4>
                        <p>{review.comment}</p>
                        <p className='text-lg font-medium'>Location: {review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;