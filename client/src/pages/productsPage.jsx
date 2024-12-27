import React, { useState, useEffect } from "react";
import { getProducts } from "../helpers/products";


const ProductsPage = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container">
            <h1>ProductsPage</h1>
            {
                loading ?
                    <h1>Loading</h1>
                    :
                    error ?
                        <h1>Error</h1>
                        :
                        products && products.length ?
                            <h1>products && products.length</h1>
                            :
                            <h1>no products yet</h1>
            }
        </div>
    )
}

export default ProductsPage;