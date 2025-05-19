import React from "react";


const ProductCard = ({ product, onCardClick, fullSize = false, onEditProduct }) => {
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
            {
                fullSize &&
                <div className="d-flex my-5 mx-2 justify-content-center">
                    <button
                        onClick={onEditProduct}
                        className="mx-3 btn btn-outline-dark w-100 shadow"
                    >Edit</button>
                    <button
                        data-bs-toggle="modal" data-bs-target="#deleteModal"
                        className="mx-3 btn btn-outline-danger w-100 shadow"
                    >Delete</button>
                </div>
            }
        </div>
    )
}

export default ProductCard;