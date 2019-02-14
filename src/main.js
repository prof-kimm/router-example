// cores and libs
import Vue from 'vue';
import App from './app.component.vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// internal libs
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
