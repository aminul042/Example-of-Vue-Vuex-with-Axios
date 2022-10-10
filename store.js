import Vue from 'vue';
import Vuex from 'vuex';
import { toLower } from 'lodash';

// store modules

import PROFILE from './store/profile.store.js';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
export const store = new Vuex.Store({
   modules: {
      PROFILE,
   },
   strict: debug
});
