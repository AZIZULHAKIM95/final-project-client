import React from 'react';

const Stat = () => {
    return (
      <div className='my-28'>
      <div class="stats stats-vertical lg:stats-horizontal shadow">
          <div >
               <h3 className='text-emerald-500 text-4xl font-bold uppercase'>Business Summerry</h3>

                <div>
              <div class="stat">
    <div class="stat-title">Downloads</div>
    <div class="text-primary stat-value">31K</div>
    <div class="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">New Users</div>
    <div class="stat-value text-primary">4,200</div>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">New Registers</div>
    <div class="stat-value text-primary">1,200</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
            </div>
            </div>

           
  
  
  
</div>
      </div>
        
    );
};

export default Stat;