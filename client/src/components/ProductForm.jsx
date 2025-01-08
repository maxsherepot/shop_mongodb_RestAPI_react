import React from "react";


const ProductForm = ({ onFormSubmit, setTitle, title, setPrice, price, setImageUrl, imageUrl, setDescription, description, submitBtnTitle }) => {

    return (
        <form onSubmit={e => onFormSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label mb-1">
                    Title
                </label>
                <input
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    className="form-control"
                    id="title" />
                <div className="form-text">Some input info text</div>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label mb-1">
                    Price
                </label>
                <input
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                    type="number"
                    className="form-control"
                    id="price" />
            </div>
            <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label mb-1">
                    Image url
                </label>
                <input
                    onChange={e => setImageUrl(e.target.value)}
                    value={imageUrl}
                    type="text"
                    className="form-control"
                    id="imageUrl" />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="form-label mb-1">
                    Description
                </label>
                <textarea
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    className="form-control"
                    id="description" />
            </div>

            <button type="submit" className="btn btn-primary shadow">{submitBtnTitle}</button>
        </form>
    )
}

export default ProductForm;