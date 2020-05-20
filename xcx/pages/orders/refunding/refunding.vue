<template>
	<view>
		<view class="handBox">
			<view class="hand_info">
				<view class="hand_status">极速退款中</view>

			</view>
			<view class="hand_userInfo">
				<view class="flex solid-bottom money margin-top justify-between money1">
					<view class="text-grey -sm margin-xs radius">退款金额</view>
					<view class="text-grey -sm margin-xs radius red">￥99.00</view>
				</view>
				<view class="flex solid-bottom money justify-between ">
					<view class="text-grey -sm margin-xs radius">退回微信</view>
					<view class="text-grey -sm margin-xs radius">￥99.00</view>
				</view>
			</view>
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
					<view class="text-grey -sm margin-xs radius">申请时间</view>
					<view class="text-grey -sm margin-xs radius">2018/8/9 12:00</view>
				</view>
				<view class="flex solid-bottom  justify-between">
					<view class="text-grey -sm margin-xs radius">退款原因</view>
					<view class="text-grey -sm margin-xs radius">七天无理由退货</view>
				</view>
				<view class="order_submit">
					<button class="cu-btn block  lg ys_white">撤销申请</button>
					<button class="cu-btn block  lg  ys_blue">填写单号</button>
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
	@import "./refunding.scss"
</style>
