import { createRouter, createWebHistory } from "vue-router";
import Home from './components/pages/Home.vue';
import Katalog from './components/pages/Katalog.vue';

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/Katalog",
        component: Katalog,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;