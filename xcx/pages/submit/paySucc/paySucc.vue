<template>
	<view style="width: 100vw;height: 100vh;background-color: white;padding-top: 127upx;">
		<view class="succ_img"><image src="../../../static/images/home/ssqx.png" mode=""></image></view>
		<view class="succ_text">支付成功！</view>
		<view class="succ_submit">
			<button class="cu-btn bg-grey1 shadow-blur round">返回首页</button>
			<button class="cu-btn bg-blue1 shadow-blur round">查看订单</button>
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
@import './paySucc.scss';
</style>
