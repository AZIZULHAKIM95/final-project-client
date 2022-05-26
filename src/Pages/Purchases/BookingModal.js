import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const axios = require("axios");



const BookingModal = ({ placeorder, setPlaceorder, reload, setReload }) => {
  const { _id, name, quantity } = placeorder
  const [user, loading, error] = useAuthState(auth);
  const url = "http://192.168.0.116:5000";

  const handleOrder = e => {
    e.preventDefault();
    const data = {
      user: user.email,
      address: e.target.children.address.value,
      phone: e.target.children.phone.value,
      product: {
        id: _id,
        quantity
      }
    }

    axios.post(url + "/placeorder", data)
      .then(res => {
        const data = res.data;
        if (data.success) {
          toast.success(`Order places Successfully`)
          setReload(!reload);
        }
        else if (data.error) {
          toast.error(`Couldn't place your order!`)
        }
      });
    setPlaceorder(null);
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">PLACING ORDER FOR : {name}</h3>
          <br />
          <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            <input type="email" name="email" disabled value={user?.email || ''} placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="address" placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;