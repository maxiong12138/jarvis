import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

//css引入
import './assets/css/reset.css'
import './assets/css/iconfont.css'

//js引入
import FastClick from 'fastclick'
FastClick.attach(document.body)




import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')