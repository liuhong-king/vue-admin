import Vue from 'vue'
import router from './router/router'
import axios from 'axios'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import "../static/css/font-awesome.min.css";
import '../static/reset.css'
import '../static/css/font-awesome.min.css'
import App from './App.vue'
import Es6Promise from 'es6-promise'
import Mix from './mixin/mix'
import i18n from './i18n/i18n'

Es6Promise.polyfill()
Vue.use(ElementUI);

Vue.prototype.$ajax = axios;
Vue.prototype.$echarts = echarts;
Vue.mixin(Mix)


let appvue=new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
});
export default appvue





