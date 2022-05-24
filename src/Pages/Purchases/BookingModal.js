import React from 'react';

const BookingModal = ({treatment, setTreatment}) => {
    const {name, slots} = treatment
    const handleBooking = event => {
        event.preventDefault();
        setTreatment(null)
        }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">PLACING ORDER FOR : {name}</h3>
    <br />
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
    <input type="email" name="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
    <input type="text" name="address" placeholder="Your Address" class="input input-bordered w-full max-w-xs" />
    <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
    <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
    </form>
  </div>
</div>
        </div>
    );
};

export default BookingModal;