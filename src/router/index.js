import { createRouter, createWebHashHistory } from 'vue-router';
import BlogPage from "@/components/pages/BlogPage";
import MainPage from "@/components/pages/MainPage";
import AlgoPage from "@/components/pages/AlgoPage";
import MemesPage from "@/components/pages/MemesPage";
import AdminLoginPage from "@/components/pages/AdminLoginPage";
import AdminPanelPage from "@/components/pages/AdminPanelPage";
import { AdminApi } from '@/api/api';

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
        path: '/memes',
        component: MemesPage,
        name: 'memes'
    },
    {
        path: '/algorithms',
        component: AlgoPage,
        name: 'algo'
    },
    {
        path: '/admin',
        component: AdminLoginPage,
        name: 'adminLoginPage',
    },
    {
        path: '/admin/panel',
        component: AdminPanelPage,
        name: 'AdminPanelPage',
        meta: {
            requiresAuth: true
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta?.requiresAuth)) {
        AdminApi.checkAuth().then(() => {
            next();
            return;
        }, () => {
            next('/admin')
        })
    } else {
        next()
    }
})

export default router;