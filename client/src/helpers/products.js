import { axiosInstance } from "./axiosSetup";


export async function getProducts() {
    return axiosInstance
        .get("/products")
        .catch(err => console.log(err))
}