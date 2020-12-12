import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.$axios = axios.create({
  baseURL:'https://8bd0cb1ad965.ngrok.io'
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
