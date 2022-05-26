import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { Navigate } from 'react-router-dom';


import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const location = useLocation();

    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);


    if (loading || adminLoading) {
        return <Loading></Loading>
    };



    return (
        <div class="drawer drawer-mobile my-8">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-4xl font-bold text-emerald-500 my-2'>WELCOME TO DASBOARD</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {
                        admin && (<>
                            <li><Link className='text-emerald-700 font-medium' to="/dashboard/addProduct">ADD PRODUCT</Link></li>
                            <li><Link className='text-emerald-700 font-medium' to="/dashboard/makeAdmin">MAKE ADMIN</Link></li>
                            <li><Link className='text-emerald-700 font-medium' to="/dashboard/manageProduct">MANAGE ALL PRODUCT</Link></li>
                        </>
                        )
                    }
                    {
                        !admin && (<>
                            <li><Link className='text-emerald-700 font-medium' to="/dashboard/myorder">MY ORDER</Link></li>
                            <li><Link className='text-emerald-700 font-medium' to="/dashboard/addaReview">ADD A REVIEW</Link></li>

                        </>)
                    }

                    <li><Link className='text-emerald-700 font-medium' to="/dashboard/myProfile">MY PROFILE</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;