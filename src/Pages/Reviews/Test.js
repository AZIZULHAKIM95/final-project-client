import React from 'react';
import Re from './Re';
const Test = () => {
    const reviews = [
        {
            _id:1,
            name: 'Edward G.Dorman',
            comment: 'Amazing services and updagradability. Very Trusted place',
            location: 'Michigan',
            
        },
        {
            _id:2,
            name: 'Kennath F.Smith',
            comment: 'His services is awesome. And very reasonable price & very fast.',
            location: 'Texas',
            
        },
        {
            _id:3,
            name: 'Will Jonas',
            comment: 'There service are much awesome & very very fast. This is hilariously chunky .',
            location: 'Alaska',
        },
        {
            _id:4,
            name: 'Mathew Buzzi',
            comment: 'There service are much awesome & very very fast. This is hilariously chunky.',
            location: 'California',
        },
    ];
    return (
        <section className='my-28'>
            <div >
            <div className='text-center'>
               <h3 className='text-primary  text-4xl font-bold uppercase'>Our Happy Buyer</h3>
            </div>
            <br />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Re
                        key={review._id}
                        review={review}
                    ></Re>)
                }
            </div>
        </section>
    );
};

export default Test;