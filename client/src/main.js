import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueAxios, Axios);
Vue.use(ElementUI);
Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
