import {mapActions} from "vuex";
import {STOCKS_ACTIONS} from "@/constants/stocks.constant.js";

export default {
    data: () => ({
        productId: null,
        loading: false,
        product: {
            name: "Beans - fav fresh",
            stocks: 560,
            reservation: [
                5, 100
            ],
            id: 1
        },
        amount: ''
    }),
    methods: {
        ...mapActions("stocks", {
            getProductById: STOCKS_ACTIONS.GET_PRODUCT,
            stockActivity: STOCKS_ACTIONS.STOCK_ACTIVITY,

        }),
        async getProduct() {
            try {
                this.loading = true
                const product = await this.getProductById(this.productId);
                this.product = product.data;
                this.loading = false
            } catch (e) {
                this.loading = false
                this.$notify({
                    type: 'error',
                    text: e.message
                })
            }
        },
        async activity(operator) {
            try {

                this.loading = true
                const data = {productId: this.productId, amount: this.amount, operator}
                const product = await this.stockActivity(data);
                this.product = product.data;
                this.loading = false;
            } catch (e) {
                this.loading = false
                this.$notify({
                    type: 'error',
                    text: e.response.data
                })
            }
        },
    },
    created() {
        this.productId = this.$route.params.id;
        this.getProduct()
    }
}