require('./bootstrap');

window.Vue = require('vue');

import { store } from './store';

// Global helper functions, for example function for validations or any repeated funciton can be storeed in
// filters.js and can be used in any component like below:
// this.$helpers.capFirstLetter('hello world');       // this will output 'Hello World'.

import helpers from './helpers';

// Global filters, can be used in any component as those filters exists in that component:

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
