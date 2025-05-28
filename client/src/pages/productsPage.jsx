import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../helpers/products";
import { useHistory } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorBanner from "../components/ErrorBanner";
import InfoBanner from "../components/InfoBanner";


const ProductsPage = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    const history = useHistory();

    const onCardClick = (id) => {
        history.push(`/product/${id}`);
    }

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
            <h2 className="mb-4">Products list</h2>
            {
                loading ?
                    <Spinner />
                    :
                    error ?
                        <ErrorBanner />
                        :
                        products && products.length ?
                            <div className="products-container pb-5">
                                {products.map(product => (
                                    <ProductCard
                                        product={product}
                                        onCardClick={onCardClick}
                                        key={product._id} />
                                ))}
                            </div>
                            :
                            <InfoBanner message="No products yet" />
            }
        </div>
    )
}

export default ProductsPage;