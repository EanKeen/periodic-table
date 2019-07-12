import Vue from 'vue';
window.Vue = Vue;

import store from './store.js';
import router from './router.js';
import App from './App.vue';

// Import global styles and material design
import './styles/variables.scss';
import './styles/fonts.scss';
import './styles/tags.scss';

import 'material-icons/iconfont/material-icons.css';

// Perfect Scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

new Vue({
  el: '#app',
  router,
  store,
  mode: 'history',
  render: h => h(App)
});
