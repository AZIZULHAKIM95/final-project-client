import React from 'react';

const MyProfile = () => {
    return (
        <div className='my-12'>
          <h2 className='text-2xl font-bold text-emerald-900 my-2'>My Profile</h2>
          <br />
          <div>
                <h2 className='text-2xl font-medium' >NAME : AZIZUL HAKIM KANON.</h2> 
                 <br />  
                <h2 className='text-xl font-medium' >EMAIL  : KANON.SHAHAREAR@GMAIL.COM</h2>   
                 <br />  
                <h2 className='text-xl font-medium' >LINKEDIN PROFILE  : https://www.linkedin.com/in/md-azizul-hakim-1b2ab623b/</h2>   
                 <br />  
                <h2 className='text-xl font-medium' >EDUCATIONAL BACKGROUND : CHARTERED ACCOUNTANT (ACCA)</h2>   
                <br />   
                <h2 className='text-xl font-medium' >PHONE NUMBER : +8801920893612</h2>  
                <br /> 
                <button className="btn bg-green-600">UPDATE</button>
                 
            </div>
        </div>
    );
};

export default MyProfile;