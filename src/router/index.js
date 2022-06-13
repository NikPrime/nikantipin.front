import { createRouter, createWebHistory } from 'vue-router';
import BlogPage from "@/components/pages/BlogPage";
import TechPage from "@/components/pages/TechPage";
import MainPage from "@/components/pages/MainPage";
import AlgoPage from "@/components/pages/AlgoPage";

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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;