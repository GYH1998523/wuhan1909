import Vue from 'vue'
import Router from 'uni-simple-router';
Vue.use(Router);
const router = new Router({
	routes: [
		{
			path: '/pages/home/home',
			name: 'list',
			meta: {
				title: '首页',
			},
		},{
			path: '/pages/classification/index',
			name: 'list',
			meta: {
				title: '分类',
			},
		},{
			path: '/pages/package/index',
			name: 'list',
			meta: {
				title: '套餐',
			},
		},{
			path: '/pages/mine/index',
			name: 'list',
			meta: {
				title: '爱豆云购商城',
			},
		},
		
	]
});


export default router
