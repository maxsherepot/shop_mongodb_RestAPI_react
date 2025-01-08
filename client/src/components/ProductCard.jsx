import React from "react";


const ProductCard = ({ product, onCardClick, fullSize = false }) => {
    const { title, price, description, imageUrl, _id } = product;
    const onClickFn = fullSize ? () => { } : () => onCardClick(_id)

    return (
        <div className="card product-card"
            onClick={onClickFn}>
            <img src={imageUrl} className="card-img-top p-3" alt={title} />
            <h5 className="text-center my-1">{title}</h5>
            <h6 className="text-center my-1">{price}$</h6>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default ProductCard;