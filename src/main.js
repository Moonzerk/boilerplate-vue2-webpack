import { createApp } from 'vue';
import App from './app.vue';
import './assets/css/main.scss';
import router from './router.js';

(async () => {
  const rootElement = document.getElementById('app');
  if (!rootElement) {
    return;
  }

  const app = createApp(App);

  app.use(router);
  app.mount(rootElement);
})();
