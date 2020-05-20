<template>
	<view>
		<view class="handBox">
			<view class="hand_info">
				<view class="hand_status">待收货</view>
				<view class="hand_pay">
					<view>已付款</view>
					<view>￥99.00</view>
				</view>
			</view>
			<view class="hand_userInfo">
				<view class="font_icon">
					<text class='cuIcon-locationfill '></text>
				</view>
				<view class="userInfo">
					<view class="user_nameTEl">
						<text>张丽</text>
						<text style="margin-left: 20upx;">15048952030</text>
					</view>
					<view class="user_add">
						<text>地址:</text>
						<text style="margin-left: 20upx;">江西省南昌市西湖区八一大道</text>
					</view>
				</view>

			</view>
		</view>
		<view style="height: 80upx;width: 100%;"></view>
		<!--  快递员信息 -->
		<view class="hand_kt">
			<view class="font_icon">
				<text class='cuIcon-locationfill '></text>
			</view>
			<view class="userKt">
				<view class="user_nameTEl">
					<text>中通快递员已揽件</text>
				</view>
				<view class="user_add">
					<text>2018-5-3 12:00</text>
				</view>
			</view>
			<view class="jiantou">></view>
		</view>




		<!-- 货品信息 -->
		<view class="goods_info">
			<view class="info_title">订单详情</view>
			<view class="orderList">
				<view class="order_body">
					<view style="height: 160upx;">
						<view class="order_img">
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
						</view>
						<view class="order_text">
							<view class="text_js">电动护理床家用多功能老人瘫痪病人全自动</view>
							<view class="text_format">规格：基础款</view>
						</view>
						<view class="order_jgsl">
							<view class="order_price">￥99</view>
							<view class="order_num">x1</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 结算详情 -->
			<view class="pay_detail">
				<view class="pay_title">结算详情</view>
				<view class="flex solid-bottom margin-top justify-between">
					<view class="text-grey -sm margin-xs radius">商品总价</view>
					<view class="text-grey -sm margin-xs radius">￥99.00</view>
				</view>
				<view class="flex solid-bottom  justify-between">
					<view class="text-grey -sm margin-xs radius">下单时间</view>
					<view class="text-grey -sm margin-xs radius">2018/2/3 12:00</view>
				</view>
				<view class="flex solid-bottom  justify-between">
					<view class="text-grey -sm margin-xs radius">支付方式</view>
					<view class="text-grey -sm margin-xs radius">微信支付</view>
				</view>
				<view class="flex solid-bottom  justify-between">
					<view class="text-grey -sm margin-xs radius">订单编号</view>
					<view class="text-grey -sm margin-xs radius">2548979856230</view>
				</view>
				<view class="flex solid-bottom  justify-between">
					<view class="text-grey -sm margin-xs radius">交易流水号</view>
					<view class="text-grey -sm margin-xs radius">2548979856230</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	@import "./waitReceive.scss"
</style>
