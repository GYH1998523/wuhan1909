import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { axios } from "@/utils"
Vue.prototype.$axios = axios
Vue.config.productionTip = false
// 引入Vant UI库
import Vant from "vant"
Vue.use(Vant)


// 引入全局的css样式
import "@/styles/index.scss";
// 一级头部
import Head from "@/components/Head.vue"
Vue.component("Head", Head)
// 二级头部
import Header from "@/components/Header.vue"
Vue.component("Header", Header)

// 搜索详情头部
import Headersear from "@/components/Headersear.vue"
Vue.component("Headersear", Headersear)


import Bilibili from "@/components/Bilibili.vue"
Vue.component("Bilibili", Bilibili)


import VueResource from "vue-resource";
Vue.use(VueResource) //全局注册声明

import Carousel from "@/components/Carousel.vue"
Vue.component("Carousel", Carousel)

import CarouselItem from "@/components/CarouselItem.vue"
Vue.component("CarouselItem", CarouselItem)





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
