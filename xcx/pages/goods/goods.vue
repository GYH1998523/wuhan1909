<template>
	<view class="box">
		<view class="goods_detail">
			<view class="gods_banner">
				<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
				 :autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item,index) in swiperList" :key="index">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</swiper-item>
				</swiper>
			</view>

			<!-- 商品价格介绍 -->
			<view class="goods_info">
				<view class="goods_data">
					<view class="goods_Nprice">￥999.00</view>
					<view class="goods_Oprice">￥9990.00</view>
					<view class="goods_sales">销量：20</view>
				</view>
				<view class="goods_conn">多功能电动护理床瘫痪老年病人全自动翻身遥控家用升降带厕病床
				</view>
			</view>
			<!-- 规格 -->
			<view class="goods_gg">
				<view class="gg_xz">
					<view class="gg_gg">规格</view>
					<view class="gg_yx">已选 基础款</view>
					<view class="gg_icon">></view>
				</view>
				<view class="gg_show">
					<view class="grey_bg">基础款</view>
					<view class="blue_bg">加宽款</view>
				</view>
			</view>

			<view class="cs_xz">
				<view class="cs_gg">参数</view>
				<view class="cs_yx">品牌 型号...</view>
				<view class="cs_icon">></view>
			</view>

			<view class="sp_xz">
				<view class="sp_pj">商品评价</view>
				<view class="sp_yx">(120条）</view>
				<view class="sp_yx blue">4.5分</view>
				<view class="sp_icon">查看全部 ></view>
			</view>
			<view class="goods_Detail_img">
				<view class="goods_title">商品详情</view>
				<view class="goods_black"></view>
				<view class="goods_img">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"></image>
				</view>
			</view>
		</view>



		<view class="goods_submit">
			<view class="btn-group">
				<button class="cu-btn bg-orange round shadow-blur">加入购物车</button>
				<button class="cu-btn bg-red round shadow-blur">立即购买</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		}
	}
</script>

<style lang="scss">
	@import "./goods.scss"
</style>
