export const STOCKS_ROUTES = Object.freeze({
    "ROOT_NAME": "stocks",
    "ROOT_PATH": "/",
});
export const DETAILS_ROUTES = Object.freeze({
    "ROOT_NAME": "details",
    "ROOT_PATH": "/stocks/:id",
});

export const STOCKS_ACTIONS = Object.freeze({
    "GET_ALL_PRODUCTS" : "getAllProducts",
    "GET_PRODUCT" : "getProductById",
    "GET_PRODUCT_STOCKS" : "getProductStockByID",
    "REFILL_PRODUCT_STOCKS" : "refillProductStocks",
    "DECREASE_PRODUCT_STOCKS" : "decreaseProductStocks",
    "RESERVE_PRODUCT" : "reserveProduct",
    "STOCK_ACTIVITY" : "stockActivity",
})