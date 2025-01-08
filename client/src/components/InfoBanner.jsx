import React from "react";


const InfoBanner = ({ message }) => {
    const messageInfo = message || "No items yet"

    return (
        <div className="d-flex my-4 justify-content-center w-100">
            <div className="alert alert-primary d-flex align-items-center" role="alert">
                {messageInfo}
            </div>
        </div>
    )
}


export default InfoBanner