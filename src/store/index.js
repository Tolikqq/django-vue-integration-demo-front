import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import sepulkas from './sepulkas'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  reducer: state => ({ auth: state.auth }),
});

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
   sepulkas,
  },
  plugins: [vuexLocal.plugin]
});
