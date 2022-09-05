import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'

import App from "./App.vue";
import router from "./router";
import AuctionElement from './components/AuctionElement.vue';

import "./assets/main.css";

const app = createApp(App);

app.use(createVuetify({
    components
}));
app.use(createPinia());
app.use(router);
app.component('AuctionElement', AuctionElement);

app.mount("#app");
