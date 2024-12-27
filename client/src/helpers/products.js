import { axiosInstance } from "./axiosSetup";
import { errorsHandler } from "./errorsHandler";


export async function getProducts() {
    return axiosInstance
        .get("/products")
        .catch(errorsHandler)
}