import isAuth from '../../middleware/isAuth';

export default {
    name: 'index',
    path: '/',
    component: () => import('../layouts/Layout.vue'),
    children: [
        {
            name: 'home',
            path: '',
            component: () => import('../views/Index.vue')
        },
        {
            name: 'my-account',
            path: '/my-account',
            beforeEnter: [isAuth],
            component: () => import('../views/MyAccount.vue')
        }
    ]
}