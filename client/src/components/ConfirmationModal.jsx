import React from "react";


const ConfirmationModal = ({ onSubmit, setShowModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content p-4">
                <h5 className="modal-title mb-3">Delete product</h5>
                <div className="modal-body mb-3">
                    Are you sure you want to delete this product?
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="btn btn-secondary mx-2"
                    >Cancel</button>
                    <button type="button" onClick={onSubmit} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    )
}


export default ConfirmationModal