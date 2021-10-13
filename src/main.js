import Vue from 'vue';
import App from './app.vue';
import router from './router.js';
import './assets/css/main.scss';

Vue.config.productionTip = process.env.NODE_ENV === 'development';

new Vue({
    router,
    render: createElement => createElement(App)
}).$mount('#app');
