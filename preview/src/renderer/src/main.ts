import './assets/main.css';
import 'virtual:uno.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Theme } from '@im-core/styles';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Theme);

app.mount('#app');
