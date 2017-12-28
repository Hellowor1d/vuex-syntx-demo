/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
  // strict: true,
  state: {
    count: 0
  },
  mutations: {
    inc: state => state.count++,
    dec: state => state.count--,
    inc2: (state,n) => state.count += n,
  },
  getters: {
    filterCount: state => {
      return state.count + " getter"
    }
  },
  actions: {
    act1 ({commit}, param) {
      if(param === "inc"){
        commit('inc')
      }
    },
    act2: ({commit}, param) => { if(param === "dec") commit('dec') }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
