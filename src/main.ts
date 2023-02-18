import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import router from './router';
import myComp from '../packages';
import Preview from './components/Preview.vue';
const app = createApp(App);
app.component('Preview', Preview);
app.use(myComp).use(router).mount('#app');
