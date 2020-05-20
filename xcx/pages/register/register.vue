<template>
	<view>
		
		<view class="cu-form-group cu-form-group1 ">
			<view class="title">姓名</view>
			<input placeholder="请输入姓名" name="input"></input>
		</view>
		<view class="cu-form-group cu-form-group1 ">
			<view class="title">手机号</view>
			<input placeholder="请输入手机号" name="input"></input>
		</view>

		<view class="cu-form-group cu-form-group1 margin-top ">
			<view class="title">企业名称</view>
			<input class="picker" placeholder="请输入企业名称" name="input"></input>
		</view>
		<!-- 城市 -->
		<view class="cu-form-group cu-form-group1">
			<view class="title">城市</view>
			<!-- <picker mode="region" @change="RegionChange" :value="region"> -->
			<picker mode="region" @change="RegionChange">
				<view class="picker">
					请选择
					<!-- {{region[0]}}，{{region[1]}}，{{region[2]}} -->
				</view>
			</picker>
		</view>
		<!-- 详细地址 -->
		<view class="cu-form-group align-start">
			<view class="title">详细地址</view>
			<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder="请输入详细地址"></textarea>
		</view>

		<view class=" flex flex-direction">
			<button class="cu-btn bg-register margin-tb-sm lg">下一步</button>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				region: ['广东省', '广州市', '海珠区'],

			};
		},
		methods: {
			RegionChange(e) {
				this.region = e.detail.value
			},
		}
	}
</script>

<style lang="scss">
	@import "./register.scss"
</style>
