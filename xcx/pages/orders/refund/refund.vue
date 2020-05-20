<template>
	<view>
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


		<view class="cu-form-group ">
			<view class="title">退款原因：</view>
			<input placeholder="请输入退款原因" name="input"></input>
		</view>
		<view class="cu-form-group justify-start ">
			<view class="title">退款金额：</view>
			<view style="margin-left: 10upx;color: #DD0000; ">￥999.00</view>
		</view>
		<view class="cu-form-group ">
			<view class="title">退款说明：</view>
			<input placeholder="无" name="input"></input>

		</view>
		<view style="margin: 20upx;">
			<checkbox class='round blue ' :class="checkbox[2].checked?'checked':''" :checked="checkbox[2].checked?true:false"
			 value="C"></checkbox>
			<text style="font-size:26upx;color:rgba(177,177,177,1);margin-left: 20upx;line-height: 26upx;">退款协议</text>
		</view>
		<view class=" flex flex-direction">
			<button class="cu-btn bg-register margin-tb-sm lg">提交</button>
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
	@import "./refund.scss"
</style>
