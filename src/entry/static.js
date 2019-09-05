// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import stat from '../stat.vue'
import router from '../router'
//window.Vue = Vue;//便于全局引用
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#static',
  router,/*
  store,
  components: { App },
  template: '<App/>'*/
  render:  c => c(stat)
})