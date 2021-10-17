import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@page/home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: '/'
    }, {
        path: '/',
        name: 'home',
        component: HomeComponent
    }, {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@page/about.vue')
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});
