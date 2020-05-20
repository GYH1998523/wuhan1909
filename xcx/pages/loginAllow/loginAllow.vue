<template>
	<view class="page">
		<view class="loginLogo">
			<image src="../../static/images/login/logo.png"></image>
		</view>
		<text class="point">*我们需要获取您的授权 关联您的账号</text>
		<view class=" flex flex-direction">
			<button class="cu-btn bg-login margin-tb-sm lg">授权登录</button>
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
@import "./loginAllow.scss"
</style>
