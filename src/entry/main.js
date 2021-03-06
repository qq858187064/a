// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../App.vue'
import router from '../router'
import vuex from 'vuex'
import store from '../vuex/store'
import axios from 'axios'
window.Vue = Vue;//便于全局引用
Vue.prototype.$ajax = axios
Vue.use(vuex)
import VueRouter from 'vue-router'
Vue.use(VueRouter)


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,/*
  components: { App },
  template: '<App/>'*/
  render:  c => c(App)
})

