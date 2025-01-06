import { axiosInstance } from "./axiosSetup";
import { errorsHandler } from "./errorsHandler";


export async function getProducts() {
    return axiosInstance
        .get("/products")
        .catch(errorsHandler)
}

export async function addProduct(value) {
    return axiosInstance
        .post("/add-product", value)
        .catch(errorsHandler)
}