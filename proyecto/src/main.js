import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from "axios" ;
import VCalendar from 'v-calendar';



Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
