import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入数据 ------------------------------------------------------------------ 修改>
const dataHome = require('../static/mock/dataHome.json');
const city=require('../static/mock/city.json')
// console.log(appData)

Vue.config.productionTip = false

//css引入
import './assets/css/reset.css'
import './assets/css/iconfont.css'

//js引入
import FastClick from 'fastclick'
FastClick.attach(document.body)


//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
import 'swiper/swiper-bundle.css'
// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//引入axios
import axios from "axios"
Vue.prototype.axios=axios

//全局挂载数据 ------------------------------------------------------------------ 修改>
Vue.prototype.dataHome=dataHome
Vue.prototype.city=city


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')