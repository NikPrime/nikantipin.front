import { createRouter, createWebHashHistory } from 'vue-router';
import BlogPage from "@/components/pages/BlogPage";
import TechPage from "@/components/pages/TechPage";
import MainPage from "@/components/pages/MainPage";
import AlgoPage from "@/components/pages/AlgoPage";
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