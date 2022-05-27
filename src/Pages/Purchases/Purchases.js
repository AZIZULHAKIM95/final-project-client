import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Purchase from './Purchase';

const Purchases = () => {
    const [products, setproducts] = useState([])
    const [placeorder, setPlaceorder] = useState(null);
    const [reload, setReload] = useState(false);
    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(url + "/products")
            .then(res => {
                setproducts(res.data.data);
            })
    }, [reload])

    return (
        <div>

            <h4 className='text-4xl font-bold text-secondary text-center my-12'>ALL OUR PRODUCT</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    products.map(p => <Purchase
                        key={p.id}
                        p={p}
                        setPlaceorder={setPlaceorder}
                    ></Purchase>)
                }
            </div>
            {placeorder && <BookingModal
                placeorder={placeorder}
                setPlaceorder={setPlaceorder}
                setReload={setReload}
                reload={reload}
            ></BookingModal>}
        </div>
    );
};

export default Purchases;