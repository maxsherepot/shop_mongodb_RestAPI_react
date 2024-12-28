import React, { useState, useEffect } from "react";
import { getProducts } from "../helpers/products";


const AddProductPage = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     getProducts()
    //         .then(res => {
    //             setProducts(res.data)
    //         })
    //         .catch(err => setError(true))
    //         .finally(() => setLoading(false))
    //  }, [])

    return (
        <div className="container">
            <h2>Add new product</h2>

            <div className="new-product-container mt-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label mb-1">
                            Title
                        </label>
                        <input type="text" className="form-control" id="title" />
                        <div className="form-text">Some input info text</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label mb-1">
                            Price
                        </label>
                        <input type="number" className="form-control" id="price" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imageUrl" className="form-label mb-1">
                            Image url
                        </label>
                        <input type="text" className="form-control" id="imageUrl" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="form-label mb-1">
                            Description
                        </label>
                        <textarea type="text" className="form-control" id="description" />
                    </div>

                    <button type="submit" className="btn btn-primary shadow">Create</button>
                </form>
            </div>
        </div>
    )
}

export default AddProductPage;