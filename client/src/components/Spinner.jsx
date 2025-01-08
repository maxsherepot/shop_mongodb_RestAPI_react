import React from "react";


const Spinner = () => {
    return (
        <div className="d-flex my-4 justify-content-center w-100">
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}


export default Spinner