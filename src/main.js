import Vue from 'vue'

import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-red/index.css';

import App from './App.vue'
import router from './router'
//import Axios from 'axios';

Vue.config.productionTip = false;

Vue.use(ElementUI);

//Vue.use(Axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
