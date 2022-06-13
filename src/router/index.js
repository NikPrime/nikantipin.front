import { createRouter, createWebHashHistory } from 'vue-router';
import BlogPage from "@/components/pages/BlogPage";
import TechPage from "@/components/pages/TechPage";
import MainPage from "@/components/pages/MainPage";
import AlgoPage from "@/components/pages/AlgoPage";
import AdminPanelPage from "@/components/pages/AdminPanelPage";

const routes = [
    {
        path: '/',
        component: MainPage,
        name: 'main'
    },
    {
        path: '/blog',
        component: BlogPage,
        name: 'blog'
    },
    {
        path: '/tech',
        component: TechPage,
        name: 'tech'
    },
    {
        path: '/algorithms',
        component: AlgoPage,
        name: 'algo'
    },
    {
        path: '/admin',
        component: AdminPanelPage,
        name: 'adminPanel'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;