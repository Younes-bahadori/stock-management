import axios from "axios";

export default {
    getAllProducts,
    stockActivity,
};


export function getAllProducts(productId = null) {
    let url = "/api/products"
    if (productId) url = url + `/${productId}`;
    return axios({
        method: "GET",
        url: url,
    });
}

export function stockActivity(params) {
    return axios({
        method: "PUT",
        url: `/api/products/${params.productId}/${params.operator}?amount=${params.amount}`,
    });
}
