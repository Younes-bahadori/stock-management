import stocksService from "@/services/api/stocks.service.js";

import {STOCKS_ACTIONS} from "@/constants/stocks.constant.js";

const actions = {
    async [STOCKS_ACTIONS.GET_ALL_PRODUCTS]() {
        try {
            const result = await stocksService[STOCKS_ACTIONS.GET_ALL_PRODUCTS]();
            return result
        } catch (error) {
            return Promise.reject(error)
        }
    },
    async [STOCKS_ACTIONS.GET_PRODUCT](context, id) {
        try {
            const result = await stocksService[STOCKS_ACTIONS.GET_ALL_PRODUCTS](id);
            return result
        } catch (error) {
            return Promise.reject(error)
        }
    },
    async [STOCKS_ACTIONS.STOCK_ACTIVITY](context, params) {
        try {
            const result =  await stocksService[STOCKS_ACTIONS.STOCK_ACTIVITY](params);
            return result
        } catch (error) {
            return Promise.reject(error)
        }
    },
};

export default actions;
