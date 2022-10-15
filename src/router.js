import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue';
import Katalog from './components/Katalog.vue';

const routes = [
    {
        path: "/",
        components: Home,
    },
    {
        path: "/Katalog",
        components: Katalog,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;