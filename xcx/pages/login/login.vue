<template>
	<view class="page">
		<!-- logo -->
		<view class="loginLogo">
			<image src="../../static/images/login/logo.png"></image>
		</view>
		<view class="loginForm">
			<input class="phone" placeholder="请输入手机号" name="phone"></input>
			<input class="password" placeholder="请输入密码" name="password"></input>
			<view class=" flex flex-direction">
				<button class="cu-btn bg-login margin-tb-sm lg">登录</button>
			</view>
				<view class="flex solid-bottom justify-between color">
								<view class="  margin-xs radius">注册</view>
								<view class="  margin-xs radius">忘记密码</view>
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

<style scoped lang="scss">
	@import "@/pages/login/login.scss"
</style>
