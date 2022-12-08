import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Inkline, components } from '@inkline/inkline';
import '@inkline/inkline/inkline.scss';
import "./main.scss";
   
createApp(App).use(store).use(router).use(Inkline, {components}).mount('#app')
