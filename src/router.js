import HomeComponent from '@page/home.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  }, {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@page/about.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// Handle page not found
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
