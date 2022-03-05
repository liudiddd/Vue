import Vue from 'vue'
import App from './App.vue'
import util from './util'

util()

// 引入store 
import store from './store'
import router from './router'

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
  beforeCreate() {
    // 使用全局总线方式实现组件间通信，利用的就是Vue.prototype对象的$on、$emit方法。
    // 组件对象的原型链最终指向Vue的原型，即vc.prototype.__proto__ === Vue.prototype，
    // 因此再Vue原型上加的方法和属性，在组件对象中也能访问到
    Vue.prototype.$bus = this 
  },
  store,
  router
}).$mount('#app')
console.log('vm', vm)
