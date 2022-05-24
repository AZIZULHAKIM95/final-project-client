import React from 'react';

const RR = ({ rr, setTreatment }) => {
  const { name, comment, location } = rr
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{comment}</p>
        <br />
        <h2 className="card-title">Location: {location}</h2>
      </div>
    </div>
  );
};

export default RR;