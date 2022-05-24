import React from 'react';
import { Link } from 'react-router-dom';

const Purchase = ({ p, setTreatment }) => {
  const { img, name, description, minimumOrder, stock, price } = p
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="w-48 rounded-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <br />
        <h2 className="card-title">Minimum Order:</h2>
        {/* <p>
              {
                  minimumOrder.length < minimumOrder
                  ?<span>{minimumOrder[minimumOrder]}</span>
                  :<span>You Are not Applicable</span>
              }
          </p> */}
        <div className='flex flex-row'>
          <button className='btn btn-primary font-extrabold'>--</button>
          <input type="text" placeholder={minimumOrder} className="input input-bordered w-full max-w-xs">
          </input>
          <button className='btn btn-primary'>++</button>
        </div>
        <h2 className="card-title">Available Stock: {stock}</h2>
        <h2 className="card-title">Price/unit: ${price}</h2>
        <div className="card-actions">
          <Link to='/purchases'>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>

        <div className="card-actions">
          <label htmlFor="booking-modal"
            onClick={() => setTreatment(p)}
            className="btn modal-button btn-primary">Place Order</label>
        </div>


      </div>
    </div>
  );
};

export default Purchase;