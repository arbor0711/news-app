import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";
import Unicon from "vue-unicons";
import { uniSearch } from "vue-unicons/dist/icons";

Unicon.add([uniSearch]);

import App from "./App.vue";

import "./normalize.css";
import "./style.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).use(Unicon).mount("#app");
