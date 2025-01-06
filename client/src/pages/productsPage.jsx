import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../helpers/products";


const ProductsPage = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then(res => {
                setProducts(res.data.products)
            })
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }, [])


    return (
        <div className="container mb-5">
            <h1>ProductsPage</h1>
            {
                loading ?
                    <h1>Loading</h1>
                    :
                    error ?
                        <h1>Error</h1>
                        :
                        products && products.length ?
                            <div className="products-container pb-5">
                                {products.map(product => (
                                    <ProductCard product={product} key={product._id} />
                                ))}
                            </div>
                            :
                            <h1>no products yet</h1>
            }
        </div>
    )
}

export default ProductsPage;