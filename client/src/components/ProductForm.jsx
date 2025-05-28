import React from "react";


const ProductForm = ({
    onFormSubmit,
    title,
    price,
    imageUrl,
    description,
    onTitleChange,
    onPriceChange,
    onImageUrlChange,
    onDescriptionChange,
    submitBtnTitle,
    dataNotFilled,
    titleError,
    priceError,
    imageUrlError,
    descriptionError
}) => {

    return (
        <form onSubmit={e => onFormSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label mb-1">
                    Title
                </label>
                <input
                    onChange={e => onTitleChange(e.target.value)}
                    value={title}
                    type="text"
                    className={`form-control ${titleError && "border-danger"}`}
                    id="title" />
                <div className="form-text">Minimum 3 characters required</div>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label mb-1">
                    Price
                </label>
                <input
                    onChange={e => onPriceChange(e.target.value)}
                    value={price}
                    type="number"
                    className={`form-control ${priceError && "border-danger"}`}
                    id="price" />
                <div className="form-text">Cannot be empty</div>
            </div>
            <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label mb-1">
                    Image url
                </label>
                <input
                    onChange={e => onImageUrlChange(e.target.value)}
                    value={imageUrl}
                    type="text"
                    className={`form-control ${imageUrlError && "border-danger"}`}
                    id="imageUrl" />
                <div className="form-text">Cannot be empty</div>
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="form-label mb-1">
                    Description
                </label>
                <textarea
                    onChange={e => onDescriptionChange(e.target.value)}
                    value={description}
                    type="text"
                    className={`form-control ${descriptionError && "border-danger"}`}
                    id="description" />
                <div className="form-text">Minimum 5 characters required</div>
            </div>

            <button
                disabled={dataNotFilled}
                type="submit"
                className="btn btn-primary shadow">{submitBtnTitle}</button>
        </form>
    )
}

export default ProductForm;