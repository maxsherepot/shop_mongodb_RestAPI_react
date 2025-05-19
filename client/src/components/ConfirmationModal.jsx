import React from "react";


const ConfirmationModal = ({ onSubmit }) => {
    return (
        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this product?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" onClick={onSubmit} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ConfirmationModal