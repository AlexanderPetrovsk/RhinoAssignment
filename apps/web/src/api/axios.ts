import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            let responseMessage = error.response.data.responseMessage;
            if (Array.isArray(responseMessage)) {
                responseMessage = responseMessage.join(' & ');
            }

            return Promise.reject({
                status: error.response.status,
                message: responseMessage || 'Server error',
            });
        }

        if (error.request) {
            return Promise.reject({
                status: 0,
                message: 'Network error. Backend not reachable.',
            });
        }

        return Promise.reject({
            status: 0,
            message: 'Unexpected error occurred.',
        });
    }
);