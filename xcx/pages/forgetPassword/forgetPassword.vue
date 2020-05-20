<template>
	<view class="page">
		<!-- logo -->
		<view class="loginLogo">
			<image src="../../static/images/login/logo.png"></image>
		</view>
		<view class="loginForm">
			<input class="phone" placeholder="请输入手机号" name="phone"></input>
			<view class="sendCodeBox" >
				<input class="captcha" placeholder="请输入验证码" name="captcha"></input>
				<button class='cu-btn sendCode shadow' @tap="ad">{{title}}</button>
			</view>

			<input class="password" placeholder="请设置密码" name="password"></input>
			<view class=" flex flex-direction">
				<button class="cu-btn bg-login margin-tb-sm lg">确认</button>
			</view>
				
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"获取验证码"
			};
		},
		methods:{
			ad(){
				this.title="已发送"
			}
		}
	}
</script>

<style lang="scss">
@import "./forgetPassword.scss"
</style>
