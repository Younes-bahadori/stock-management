import DataTable from '@/common/components/data-table/data-table.vue'
import {mdiInformationVariant} from '@mdi/js'
import {mapActions} from "vuex";
import {STOCKS_ACTIONS} from "@/constants/stocks.constant.js";


export default {
    name: "stocks",
    components: {
        DataTable,
    },
    data() {
        return {
            headers: [
                {
                    text: 'Product Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {text: 'Stock', value: 'stock'},
                {text: 'Actions', value: 'actions', sortable: false},

            ],
            itemsPerPage: 10,
            products: [],
            operationTypes: [
                {event: 'showDetails', color: 'white', icon: mdiInformationVariant},
            ],
            search: ''
        }
    },
    methods: {
        ...mapActions("stocks", {
            getAllProducts: STOCKS_ACTIONS.GET_ALL_PRODUCTS
        }),
        async getProducts() {
            try {
                const products = await this.getAllProducts();
                this.products = products.data;
            } catch (e) {
                this.$notify({
                    type: 'error',
                    text: e.message
                })
            }
        },
        showDetails(data) {
            this.$router.push(`/stocks/${data.id}`)
        }
    },
    mounted() {
        this.getProducts()
    },
}