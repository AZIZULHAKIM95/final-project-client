import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import MyLineChart from './MyLineChart';
import Stat from './Stat';
import Qstn from '../Qstn/Qstn';
import ReviewCard from '../Reviews/ReviewCard';
import Purchase from '../Purchases/Purchase'
import useProducts from '../../hooks/useProducts';
import axios from 'axios';


const Home = () => {

    const [products, setproducts] = useState([]);
    const [reviews, setReviews] = useState([]);

    const url = "http://192.168.0.116:5000";

    useEffect(() => {
        axios.get(url + "/products")
            .then(res => {
                setproducts(res.data.data);
            });

        axios.get(url + "/reviews")
            .then(res => {
                setReviews(res.data.data);
            });

    }, [])
    return (
        <div className=''>
            <Banner></Banner>
            <br />
            <div>
                <h4 className='text-4xl font-bold text-secondary text-center my-12'>ALL OUR PRODUCT</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {
                        products.slice(-6).map(p => <Purchase
                            key={p.id}
                            p={p}
                        ></Purchase>)
                    }
                </div>
            </div>
            <br />
            <div>
                <h4 className='text-4xl font-bold text-secondary text-center my-28'>OUR CLIENT REVIEWS</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {
                        reviews.map(review => <ReviewCard
                            key={review._id}
                            review={review}
                        ></ReviewCard >)
                    }
                </div>
            </div>
            <br />
            <MyLineChart></MyLineChart>
            <br />
            <Stat></Stat>
            <br />
            <Qstn></Qstn>
            <br />
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Home;