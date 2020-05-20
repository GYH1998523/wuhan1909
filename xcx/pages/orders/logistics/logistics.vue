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


		<view class="cu-form-group margin-top">
			<view class="title">物流单号</view>
			<input placeholder="161652321323" name="input"></input>
		</view>
		<view class="cu-form-group align-start">
			<view class="title">退款说明</view>
			<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder="无"></textarea>
		</view>
	<view class="cu-bar bg-white margin-top">
				<view class="action">
					上传凭证
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<view class=" flex flex-direction">
				<button class="cu-btn bg-login margin-tb-sm lg">提交</button>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [],

			};
		},
		methods:{
				ChooseImage() {
							uni.chooseImage({
								count: 4, //默认9
								sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
								sourceType: ['album'], //从相册选择
								success: (res) => {
									if (this.imgList.length != 0) {
										this.imgList = this.imgList.concat(res.tempFilePaths)
									} else {
										this.imgList = res.tempFilePaths
									}
								}
							});
						},
							DelImg(e) {
										uni.showModal({
											content: '确定要删除这张照片吗？',
											cancelText: '取消',
											confirmText: '确定',
											success: res => {
												if (res.confirm) {
													this.imgList.splice(e.currentTarget.dataset.index, 1)
												}
											}
										})
									},
		}
			
	}
</script>

<style lang="scss">
	@import "./logistics.scss"
</style>
