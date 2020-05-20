<template>
	<view>
		<view class="userinfo">
			<view class="cu-avatar-group">
				<view class="cu-avatar round lg" :style="[{ backgroundImage:'url(' + avatar[0] + ')' }]"></view>
			</view>
			<view class="usertext">
				<view class="userClass">
					<view class="nickName">你是天使</view>
					<view class="userType">客户类型</view>
				</view>
				<view class="address">江西省南昌市</view>
			</view>
			<!-- 我的订单 -->
			<view class="myOrder">
				<view class="title">
					<text class="malltitle" style="font-size:32upx;font-weight:400;color:rgba(37,37,37,1);margin-left: 2%;">商城频道</text>
					<text class="more">查看全部 ></text>
					<view class="flex">
						<view class="flex-sub  padding-sm margin-xs radius">
							<view>
								<image class="orderImg" src="../../static/images/basic/badge.png"></image>
							</view>
							<text class="orderText">待付款</text>
						</view>

						<view class="flex-sub  padding-sm margin-xs radius">
							<view>
								<image class="orderImg" src="../../static/images/basic/badge.png"></image>
							</view>
							<text class="orderText">待发货</text>
						</view>

						<view class="flex-sub  padding-sm margin-xs radius">
							<view>
								<image class="orderImg" src="../../static/images/basic/badge.png"></image>
							</view>
							<text class="orderText">待收货</text>
						</view>

						<view class="flex-sub  padding-sm margin-xs radius">
							<view>
								<image class="orderImg" src="../../static/images/basic/badge.png"></image>
							</view>
							<text class="orderText">待评价</text>
						</view>

						<view class="flex-sub  padding-sm margin-xs radius">
							<view>
								<image class="orderImg" src="../../static/images/basic/badge.png"></image>
							</view>
							<text class="orderText">售后</text>
						</view>

					</view>
				</view>
			</view>


		</view>
		<!-- 收货地址 -->
		<view class="initFormation flex">
			<view class="flex-sub  padding-sm margin-xs radius">
				<view class="formImg">
					
					<image src="../../static/images/news/3.jpg"></image>
				</view>
				
				<view class="formText">
					<text >收货地址</text>
				</view>
			</view>
			<view class="flex-sub  padding-sm margin-xs radius">
				<view class="formImg">
					<image src="../../static/images/news/3.jpg"></image>
				</view>
				<view class="formText">
					<text >我的评价</text>
				</view>
				
			</view>
			<view class="flex-sub  padding-sm margin-xs radius">
				<view class="formImg">
					<image src="../../static/images/news/3.jpg"></image>
				</view>
				<view class="formText">
					<text >个人资料</text>
				</view>
				
			</view>


		</view>
	
	
	<!-- 为您推荐 -->
	<view class="shopBox">
		<view class="shopTitle">为您推荐</view>
		<view class="shopShow">
				<view class="showList">
					<image  src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
					<view class="description">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制</view>
					<view class="price">¥65.00</view>
					<view class="sales">销量：20</view>
				</view>
		</view>
		
		<view class="shopShow">
				<view class="showList">
					<image  src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
					<view class="description">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制</view>
					<view class="price">¥65.00</view>
					<view class="sales">销量：20</view>
				</view>
		</view>
		
		<view class="shopShow">
				<view class="showList">
					<image  src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
					<view class="description">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制</view>
					<view class="price">¥65.00</view>
					<view class="sales">销量：20</view>
				</view>
		</view>
		
		<view class="shopShow">
				<view class="showList">
					<image  src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
					<view class="description">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制</view>
					<view class="price">¥65.00</view>
					<view class="sales">销量：20</view>
				</view>
		</view>
			
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ColorList: this.ColorList,
				avatar: [
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
				],

			};
		}
	}
</script>

<style lang="scss">
	@import "./index.scss"
</style>
