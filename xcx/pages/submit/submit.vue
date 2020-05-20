<template>
	<view>
		<view style="width: 100vw;height: 100vh;background-color: white;">
			<view class="hand_userInfo">
				<view class="font_icon"><text class="cuIcon-locationfill "></text></view>
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
				<view class="icon"><text class="cuIcon-right"></text></view>
			</view>
			<view class="title">全部商品</view>
			<view>
				<view class="goods_list">
					<view class="list_img"><image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"></image></view>
					<view class="list_info">
						<view class="info_conn">稳捷倍优血糖测试仪家用血糖仪精准 测血糖的仪器稳豪试纸50片</view>
						<view class="info_params">大屏彩显 5秒测糖 600组记忆储存</view>
						<view class="info_price">
							<text class="info_price_now">￥ 688</text>
							<text class="info_price_old"></text>
							<text class="info_price_sale">×1</text>
						</view>
					</view>
				</view>
			</view>
			<view class="title">支付方式</view>
			<view class="pay">
				<view class="weixinTu">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"></image>
				</view>
				<view class="weixinPay">微信支付</view>
			</view>
		</view>

		<view class="submitData">
			<view style="">合计：</view>
			<view class="allPrice">￥299.00</view>
			<button class="cu-btn bg-blue shadow-blur round">支付</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
@import './submit.scss';
</style>
