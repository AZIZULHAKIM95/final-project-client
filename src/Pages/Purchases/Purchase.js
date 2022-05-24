import React from 'react';
import { Link } from 'react-router-dom';

const Purchase = ({p, setTreatment}) => {
    const {img, name, description, minimumOrder, stock, price} = p
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="" className="w-48 rounded-full" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <br />
          <h2 class="card-title">Minimum Order:</h2>
          {/* <p>
              {
                  minimumOrder.length < minimumOrder
                  ?<span>{minimumOrder[minimumOrder]}</span>
                  :<span>You Are not Applicable</span>
              }
          </p> */}
          <div className='flex flex-row'>
          <button className='btn btn-primary font-extrabold'>--</button>
          <input type="text" placeholder={minimumOrder} class="input input-bordered w-full max-w-xs">
          </input>
          <button className='btn btn-primary'>++</button>
          </div>
          <h2 class="card-title">Available Stock: {stock}</h2>
          <h2 class="card-title">Price/unit: ${price}</h2>
          <div class="card-actions">
          <Link to='/purchases'>
            <button class="btn btn-primary">Book Now</button>
            </Link>
          </div>
          
          <div class="card-actions">
            <label for="booking-modal"
            onClick={() => setTreatment(p)} 
            class="btn modal-button btn-primary">Place Order</label>
          </div>
            

        </div>
      </div>
    );
};

export default Purchase;