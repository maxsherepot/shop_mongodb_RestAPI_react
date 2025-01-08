import React, { useState } from "react";
import { addProduct } from "../helpers/products";
import { useHistory } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../helpers/helpers";
import { errorToastNotification } from "../constants";
import ProductForm from "../components/ProductForm";


const AddProductPage = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")

    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault()

        addProduct({ title, price, description, imageUrl })
            .then(() => {
                history.push("/");
                showSuccessToast("Product created successfully")
            })
            .catch(err => {
                showErrorToast(errorToastNotification)
            })
    }

    return (
        <div className="container">
            <h2>Add new product</h2>

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
                    submitBtnTitle="Create"
                />
            </div>
        </div>
    )
}

export default AddProductPage;