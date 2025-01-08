import React, { useState, useEffect } from "react";
import ErrorBanner from "../components/ErrorBanner";
import InfoBanner from "../components/InfoBanner";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import Spinner from "../components/Spinner";
import { errorToastNotification } from "../constants";
import { showErrorToast, showSuccessToast } from "../helpers/helpers";
import { editProduct, getProduct } from "../helpers/products";


const ProductDetailsPage = ({ match }) => {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    const productId = match.params.id

    useEffect(() => {
        setLoading(true)
        getProduct(productId)
            .then(res => {
                setProduct(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setImageUrl(res.data.imageUrl)
                setDescription(res.data.description)
            })
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }, [isEditMode])

    const onEditProduct = () => {
        setIsEditMode(true)
    }

    const onDeleteProduct = () => {
    }

    const onFormSubmit = e => {
        e.preventDefault()

        editProduct(productId, { title, price, description, imageUrl })
            .then(res => {
                setIsEditMode(false)
                showSuccessToast("Updated")
            })
            .catch(() => showErrorToast(errorToastNotification))
    }

    return (
        <div className="container my-5">
            {
                loading ?
                    <Spinner />
                    :
                    error ?
                        <ErrorBanner />
                        :
                        isEditMode ?
                            <div className="new-product-container mt-5">
                                <ProductForm
                                    onFormSubmit={onFormSubmit}
                                    setTitle={setTitle}
                                    title={title}
                                    setPrice={setPrice}
                                    price={price}
                                    setImageUrl={setImageUrl}
                                    imageUrl={imageUrl}
                                    setDescription={setDescription}
                                    description={description}
                                    submitBtnTitle="Save"
                                />
                            </div>
                            :
                            product ?
                                <div className="product-card-container pt-3">
                                    <ProductCard
                                        product={product}
                                        fullSize
                                        onEditProduct={onEditProduct}
                                        onDeleteProduct={onDeleteProduct}
                                    />
                                </div>
                                :
                                <InfoBanner message="no product available" />
            }
        </div>
    )
}

export default ProductDetailsPage;