import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router/index.js'

Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'


const tui = {
	toast: function(text, duration, success) {
		uni.showToast({
			title: text,
			icon: success ? 'success' : 'none',
			duration: duration || 2000
		})
	},
}
Vue.prototype.tui = tui
const app = new Vue({
    ...App,
	router
})
app.$mount()