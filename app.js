require('./bootstrap');

window.Vue = require('vue');

import { store } from './store';
import helpers from './helpers';
import filters from '.filters';

// Using global filters for all vue components:

Vue.mixin({
  filters: filters
});

// Using custom functions to be available in all components:

const plugin = {
    install () {
      Vue.helpers = helpers
      Vue.prototype.$helpers = helpers
    }
}

Vue.use(plugin)

Vue.component('seafarer-status', require('./components/profile.vue').default);

const app = new Vue({
    el: '#app',
});
