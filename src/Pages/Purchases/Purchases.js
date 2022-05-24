import React,{useEffect, useState} from 'react';
import BookingModal from './BookingModal';
import Purchase from './Purchase';

const Purchases = () => {
    const [pp, setPp] = useState([])
    const [treatment, setTreatment] = useState(null);

    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setPp(data))
    }, [])
    
    return (
        <div>
            <h4 className='text-4xl font-bold text-secondary text-center my-12'>ALL OUR PRODUCT</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    pp.map(p=><Purchase
                    key={p.id}
                    p={p}
                    setTreatment={setTreatment}
                    ></Purchase>)
                }
            </div>
            {treatment && <BookingModal 
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default Purchases;