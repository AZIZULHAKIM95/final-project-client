import React, { useEffect, useState } from 'react';
import Review from '../Reviews/Review';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import MyLineChart from './MyLineChart';
import Stat from './Stat';
import Purchase from '../Purchases/Purchase'


const Home = () => {

    const [pp, setPp] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPp(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <br />
            <div>
                <h4 className='text-4xl font-bold text-secondary text-center my-12'>ALL OUR PRODUCT</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {
                        pp.slice(-6).map(p => <Purchase
                            key={p.id}
                            p={p}
                        ></Purchase>)
                    }
                </div>
            </div>
            <br />
            <Review></Review>
            <br />
            <MyLineChart></MyLineChart>
            <br />
            <Stat></Stat>
            <br />
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Home;