import React from 'react';

const Stat = () => {
  return (
    <div className='my-28'>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div >
          <h3 className='text-emerald-500 text-4xl font-bold uppercase'>Business Summerry</h3>

          <div>
            <div className="stat">
              <div className="stat-title">ORDERS</div>
              <div className="text-primary stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">NEW USERS</div>
              <div className="stat-value text-primary">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">ORDER DELIVERY</div>
              <div className="stat-value text-primary">1,200</div>
              <div className="stat-desc">↗︎ 90 (84%)</div>
            </div>
          </div>
        </div>





      </div>
    </div>

  );
};

export default Stat;