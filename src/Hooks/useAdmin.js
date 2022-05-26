import axios from "axios";
import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            const url = "http://192.168.0.116:5000";

            axios.get(`${url}/user/admin/${email}`,{
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res=>{
                const {admin} = res.data;
                setAdmin(admin);
                setAdminLoading(false);

            })

            // fetch(`${url}/user/admin/${email}`, {
            //     method: 'GET',
                
            // })
            //     .then(res => {
            //         if (res.status === 401 || res.status === 403) {
            //             return res.json()
            //         }
            //         res.json();
            //     })
            //     .then(data => {
            //         setAdmin(data.admin);
            //         setAdminLoading(false);
            //     })
        }
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;