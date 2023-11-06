import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import axios from "axios";
createApp(App).use(router).mount("#app");
axios.defaults.baseURL = "http://localhost:5000";
