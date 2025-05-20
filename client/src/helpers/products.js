import { axiosInstance } from "./axiosSetup";
import { errorsHandler } from "./errorsHandler";


export async function getProducts() {
    return axiosInstance
        .get("/products")
        .catch(errorsHandler)
}

export async function getProduct(id) {
    return axiosInstance
        .get(`/product/${id}`)
        .catch(errorsHandler)
}

export async function addProduct(value) {
    return axiosInstance
        .post("/add-product", value)
        .catch(errorsHandler)
}

export async function editProduct(id, value) {
    return axiosInstance
        .put(`/product/${id}`, value)
        .catch(errorsHandler)
}

export async function deleteProduct(id) {
    return axiosInstance
        .delete(`/product/${id}`)
        .catch(errorsHandler)
}