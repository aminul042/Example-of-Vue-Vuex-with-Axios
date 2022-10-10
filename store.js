import Vue from 'vue';
import Vuex from 'vuex';

// store modules
// Only required ones can be imported in profile page.
// This is the best way while creating large applicaiton where big amount of data can be stored in indivitual modules

import PROFILE from './stores/profile.store.js';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
export const store = new Vuex.Store({
   modules: {
      PROFILE,
   },
   strict: debug
});
