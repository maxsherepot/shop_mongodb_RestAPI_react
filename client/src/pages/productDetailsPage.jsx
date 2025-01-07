import React, { useState, useEffect } from "react";
import { getProduct } from "../helpers/products";


const ProductDetailsPage = ({ match }) => {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(false)

    const productId = match.params.id

    useEffect(() => {
        setLoading(true)
        getProduct(productId)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }, [])

    return (
        <h1>ProductDetailsPage</h1>
    )
}

export default ProductDetailsPage;