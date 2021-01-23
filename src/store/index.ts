import Vue from 'vue';
import Vuex from 'vuex';
import A from '@/modules/A/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    A,
  },
});
