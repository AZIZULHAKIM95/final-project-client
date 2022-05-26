import React from 'react';

const DeleteModal = ({setConfirmDelete}) => {
    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Confirm Delete?</h3>
                    <div class="modal-action">
                        <label for="delete-modal" class="btn">
                            <button onClick={()=>setConfirmDelete(true)}>Yes</button>
                        </label>
                        <label for="delete-modal" class="btn">
                            <button onClick={()=>setConfirmDelete(false)}>No</button>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;