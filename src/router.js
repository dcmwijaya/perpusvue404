import { createRouter, createWebHistory } from "vue-router";
import Home from './components/pages/Home.vue';
import Katalog from './components/pages/Katalog.vue';
import ManajemenBuku from './components/pages/ManajemenBuku.vue';

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/Katalog",
        component: Katalog,
    },
    {
        path: "/ManajemenBuku",
        component: ManajemenBuku,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;