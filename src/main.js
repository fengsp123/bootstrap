import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from 'jquery';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
