import React, { useState, useEffect } from "react";
import ErrorBanner from "../components/ErrorBanner";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
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
        <div className="container my-5">
            {
                loading ?
                    <Spinner />
                    :
                    error ?
                        <ErrorBanner />
                        :
                        product ?
                            <div className="product-card-container pt-3">
                                <ProductCard
                                    product={product}
                                    fullSize
                                />
                            </div>
                            :
                            <h1>no products yet</h1>
            }
        </div>
    )
}

export default ProductDetailsPage;