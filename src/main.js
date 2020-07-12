import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// 封装request请求 写在对应的view页面中
// import {request} from "./network/index.js"
// request({
//   url:"/home/multidata",
// }).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })