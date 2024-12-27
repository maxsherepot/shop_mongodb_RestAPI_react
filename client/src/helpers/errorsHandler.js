import { token } from "../constants"

export const errorsHandler = error => {
    if (error.response?.status === 401) {
        // localStorage.removeItem(token)
        window.location.reload(true)
        // } else if (!error.response.ok) {
        //     throw new Error(error.response.statusText)
    }
    return error
}