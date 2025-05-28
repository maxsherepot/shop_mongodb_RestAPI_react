import React, { useState } from "react";
import { addProduct } from "../helpers/products";
import { useHistory } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../helpers/helpers";
import { errorToastNotification } from "../constants";
import ProductForm from "../components/ProductForm";


const AddProductPage = () => {
    const [title, setTitle] = useState("")
    const [titleError, setTitleError] = useState(false)
    const [price, setPrice] = useState("")
    const [priceError, setPriceError] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const [imageUrlError, setImageUrlError] = useState(false)
    const [description, setDescription] = useState("")
    const [descriptionError, setDescriptionError] = useState(false)

    const dataNotFilled = titleError || !title || !price || !imageUrl || descriptionError || !description;

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

    const onTitleChange = (value) => {
        setTitle(value);
        if (value.length < 3) {
            setTitleError(true);
        } else {
            setTitleError(false);
        }
    };

    const onPriceChange = (value) => {
        setPrice(value);
        if (!value.length) {
            setPriceError(true);
        } else {
            setPriceError(false);
        }
    };

    const onImageUrlChange = (value) => {
        setImageUrl(value);
        if (!value.length) {
            setImageUrlError(true);
        } else {
            setImageUrlError(false);
        }
    };

    const onDescriptionChange = (value) => {
        setDescription(value);
        if (value.length < 5) {
            setDescriptionError(true);
        } else {
            setDescriptionError(false);
        }
    };


    return (
        <div className="container">
            <h2>Add new product</h2>

            <div className="new-product-container mt-3">
                <ProductForm
                    onFormSubmit={onFormSubmit}
                    title={title}
                    price={price}
                    imageUrl={imageUrl}
                    description={description}
                    onTitleChange={onTitleChange}
                    onPriceChange={onPriceChange}
                    onImageUrlChange={onImageUrlChange}
                    onDescriptionChange={onDescriptionChange}
                    submitBtnTitle="Create"
                    dataNotFilled={dataNotFilled}
                    titleError={titleError}
                    priceError={priceError}
                    imageUrlError={imageUrlError}
                    descriptionError={descriptionError}
                />
            </div>
        </div>
    )
}

export default AddProductPage;