import React from "react";


const ErrorBanner = () => {
    return (
        <div className="d-flex my-4 justify-content-center w-100">
            <div className="alert alert-danger d-flex align-items-center" role="alert">
                Something went wrong, please try again
            </div>
        </div>
    )
}


export default ErrorBanner