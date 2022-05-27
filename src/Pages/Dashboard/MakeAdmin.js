import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import { toast } from 'react-toastify';

const MakeAdmin = () => {
    const [alluser, setAllUser] = useState([]);
    const [update, setUpdate] = useState(false);

    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const url = process.env.REACT_APP_API_URL

    useEffect(() => {
        if (user) {
            axios.get(url + `/user`, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
            ).then(res => setAllUser(res.data));
        }
    }
        , [user, update]);

    const changeRole = (chuser) => {
        const data = { email: chuser.email }
        if (chuser.email === user.email) {
            return toast.error("Can't change own role!!");
        }
        if (chuser.role) {
            data.role = ""
        }
        else {
            data.role = "admin"
        }
        axios.put(url + `/user/admin/${chuser.email}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            const { data } = res;
            if (data.modifiedCount) {
                setUpdate(!update);
                return toast.success("User role changed");
            }
            toast.error("Can't change user role")
        })
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-emerald-900 my-2'>Total User: {alluser.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Role</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            alluser.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>

                                        <p><span className='text-success font-bold'>{(user.role) ? "Admin" : "User"}</span></p>

                                    </td>
                                    <td>
                                        {(user.role === "admin") ? <button className='btn btn-xs btn-danger' onClick={() => changeRole(user)}>Remove Admin</button> :
                                            <button className='btn btn-xs btn-success' onClick={() => changeRole(user)} > Make Admin</button>}
                                    </td>
                                </tr>))
                        }


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MakeAdmin;