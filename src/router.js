import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@page/Home.vue';

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
        component: () => import(/* webpackChunkName: "about" */ '@page/About.vue')
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});
