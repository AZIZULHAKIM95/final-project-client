import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Purchase = ({ p, setPlaceorder }) => {
  const { img, name, description, minimumOrder, stock, price } = p

  const location = useLocation();

  const [display, setDisplay] = useState({ b: false, p: false });
  const [isDisable, setIsDisable] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (location.pathname === "/purchases") {
      setDisplay({ b: false, p: true });
    }
    else if (location.pathname === "/") {
      setDisplay({ b: true, p: false });
    }
    else {
      setDisplay({ b: false, p: false });
    }

  }, [location.pathname]);

  const [newQuantity, setNewQuantity] = useState(minimumOrder);
  const increase = () => {
    if (newQuantity >= stock) {
      setError("Stock overload!!")
    }
    else {
      setNewQuantity(newQuantity + 1);
      setError(false)
    }
  }
  const decrease = () => {
    if (newQuantity <= minimumOrder) {
      setError(`Mininum order is ${minimumOrder}`)
    }
    else {
      setNewQuantity(newQuantity - 1);
      setError(false)
    }
  }
  const changeValue = (e) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value)) {
      setNewQuantity(value);
    }
    else{
      setNewQuantity(0);
    }

    if (value > stock || value < minimumOrder) {
      setIsDisable(true)
    }
    else {
      setIsDisable(false)
    }
  }

  if (error) {
    setTimeout(() => { setError(false) }, 2000)
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="w-48 rounded-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className='text-justify'>{description}</p>
        <p className="card-title">Minimum Order: {minimumOrder}</p>
        {
          error && <p className='text-red-600'>{error}</p>
        }
        {
          display.p &&
          <div className='flex flex-row'>
          <button onClick={decrease} className='btn bg-green-500 font-extrabold'>--</button>
          <input type="text" onChange={(e) => changeValue(e)} value={newQuantity} className="input input-bordered w-full max-w-xs">
          </input>
          <button className='btn bg-green-500' onClick={increase}>++</button>
        </div>
        }
        <h2 className="card-title">Available Stock: {stock}</h2>
        <h2 className="card-title">Price/unit: ${price}</h2>
        {
          display.b &&
          <div className="card-actions">
            <Link to='/purchases'>
              <button className="btn bg-blue-600">Book Now</button>
            </Link>
          </div>
        }

        {
          display.p &&
          <button disabled={isDisable} className="card-actions" onClick={() => setPlaceorder({...p,quantity:newQuantity})}>
            <label htmlFor="booking-modal"
              className="btn modal-button bg-green-600" >Place Order</label>
          </button>
        }
      </div>
    </div>
  );
};

export default Purchase;