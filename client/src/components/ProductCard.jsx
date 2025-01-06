import React from "react";


const ProductCard = ({ product }) => {
    const { title, price, description, imageUrl } = product;

    return (
        <div className="card product-card">
            <a href="#">
                <img src={imageUrl} className="card-img-top p-3" alt={title} />
                <h5 className="text-center my-1">{title}</h5>
                <h6 className="text-center my-1">{price}$</h6>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
            </a>
        </div>
    )
}

export default ProductCard;