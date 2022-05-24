import React,{useEffect, useState} from 'react';
import RR from './RR';

const RRR = () => {
    const [rrr, setRRR] = useState([])
    const [treatment, setTreatment] = useState(null);

    useEffect( ()=>{
        fetch('feedback.json')
        .then(res=>res.json())
        .then(data=>setRRR(data))
    }, [])
    
    return (
        <div>
            <h4 className='text-4xl font-bold text-secondary text-center my-12'>OUR CLIENT REVIEWS</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    rrr.map(rr=><RR
                    key={rr.id}
                    rr={rr}
                    setTreatment={setTreatment}
                    ></RR>)
                }
            </div>
        </div>
    );
};

export default RRR;