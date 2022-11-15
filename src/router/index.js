import Vue from "vue";
import VueRouter from "vue-router";
import {STOCKS_ROUTES, DETAILS_ROUTES} from "@/constants/stocks.constant";

Vue.use(VueRouter);

const routes = [
    {
        path: STOCKS_ROUTES.ROOT_PATH,
        name: STOCKS_ROUTES.ROOT_NAME,
        component: () =>
            import("@/views/stocks/stocks.view.vue"),
        meta: {
            layout: "BaseLayout",
            auth: false,
        },
    },
    {
        path: DETAILS_ROUTES.ROOT_PATH,
        name: DETAILS_ROUTES.ROOT_NAME,
        component: () =>
            import("@/views/stocks/details/details.view.vue"),
        meta: {
            layout: "BaseLayout",
            auth: false,
        },
    },
    {path: '*', redirect: '/'}
];

const router = new VueRouter({
    routes,
});

export default router;
