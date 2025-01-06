import React, { useState } from "react";
import { addProduct } from "../helpers/products";
//import { useHistory } from "react-router-dom";


const AddProductPage = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")

    //const history = useHistory();

    const createProduct = (e) => {
        e.preventDefault()
        props.history.push("/");
        // addProduct({ title, price, description, imageUrl })
        //     .then(() => {
        //         history.push("/");
        //     })
        //     .catch(err => {
        //         console.log(err)
        //         //TODO add notification
        //     })
    }

    return (
        <div className="container">
            <h2>Add new product</h2>

            <div className="new-product-container mt-5">
                <form onSubmit={e => createProduct(e)}>
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

                    <button type="submit" className="btn btn-primary shadow">Create</button>
                </form>
            </div>
        </div>
    )
}

export default AddProductPage;