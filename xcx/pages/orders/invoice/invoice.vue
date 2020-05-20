<template>
	<view>
		<view class="text">发票详情</view>
		<view class="cu-form-group ">
			<view class="title">抬头类型</view>
			<view class="cu-form-group ">
				<view class="title">企业单位1</view>

				<radio class='blue margin-left-sm' :class="radio=='D'?'checked':''" :checked="radio=='D'?true:false" value="D"></radio>
				<view class="title">企业单位</view>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">公司名称</view>
			<input placeholder="请输入公司名称" name="input"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">公司税号</view>
			<input placeholder="请输入公司税号" name="input"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">总金额</view>
			<input placeholder="请输入总金额" name="input"></input>
		</view>
		<view class="text">接收方式</view>

		<view class="cu-form-group ">
			<view class="title">电子邮箱</view>
			<input placeholder="请输入电子邮箱" name="input"></input>
			<radio class='blue ' :class="radio=='C'?'checked':''" :checked="radio=='C'?true:false" value="C"></radio>
		</view>
		<view class="flex cu-form-group ">
			<view class="title">纸质发票</view>
			<view class="initAdd radius" @tap="openInit">填写地址</view>
			<radio class='blue ' :class="radio=='C'?'checked':''" :checked="radio=='C'?true:false" value="C"></radio>
		</view>
		


		<view class=" flex flex-direction">
			<button class="cu-btn bg-register margin-tb-sm lg">确认</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				region: ['江西省', '南昌市', '南昌县'],
				checkbox: [{
					value: 'A',
					checked: true
				}, {
					value: 'B',
					checked: true
				}, {
					value: 'C',
					checked: false
				}],
			};
		},
		methods: {
			RegionChange(e) {
				this.region = e.detail.value
			},
			openInit() {

				uni.navigateTo({
					url: '../initAddress/initAddress',
				})

			}
		}
	}
</script>

<style scoped lang="scss">
	@import "./invoice.scss"
</style>
