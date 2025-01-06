import { toast } from 'react-toastify';
import { notificationsTime } from '../constants';


export const showSuccessToast = successMessage => {
    return toast.success(successMessage, {
        position: "top-right",
        autoClose: notificationsTime,
    });
};

export const showErrorToast = errorMessage => {
    return toast.error(errorMessage, {
        position: "top-right",
        autoClose: notificationsTime,
    });
};