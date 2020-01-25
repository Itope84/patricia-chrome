import Vue from 'vue';
import App from './App.vue';

import Toaster from 'v-toaster';

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css';

// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, { timeout: 5000 });

const app = new Vue({
  render: h => h(App)
}).$mount('#app');

// const statements = [
//   "make it big",
//   "make it easy",
//   "innovate",
//   "make it faster",
//   "make it smarterout work the best",
//   "do the best",
//   "make it great",
//   "make it convenient",
//   "make it awesome",
//   "make it happen",
//   "make it count",
//   "make it brilliant"
// ];
