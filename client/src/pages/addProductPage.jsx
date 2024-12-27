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
            <h1>AddProductPage</h1>
        </div>
    )
}

export default AddProductPage;