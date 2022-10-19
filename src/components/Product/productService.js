import axios from "axios";

const serverAddress = 'http://localhost:5000/products/';
export const productsService = {
    getAllProducts: (q = "") => {
        return axios.get(serverAddress + q);
    },
    getProductById: (id) => {
        return axios.get(serverAddress + id);
    },
    sendComment:  (productId, comment) => {
        return axios.post(serverAddress + productId + '/comments', comment)
    },
    getComments: (productId) => {
        return axios.get(serverAddress + productId + '/comments');
    },
}