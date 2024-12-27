import React from "react";
import { getProducts } from "../helpers/products";


const ProductsPage = () => {
    getProducts()
    return (
        <h1>ProductsPage</h1>
    )
}

export default ProductsPage;