import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../helpers/products";
import { useHistory } from "react-router-dom";
import Spinner from "../components/Spinner";


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
            <h1>ProductsPage</h1>
            {
                loading ?
                    <Spinner />
                    :
                    error ?
                        <h1>Error</h1>
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
                            <h1>no products yet</h1>
            }
        </div>
    )
}

export default ProductsPage;