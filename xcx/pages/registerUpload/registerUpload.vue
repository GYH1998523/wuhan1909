<template>
	<view style="background-color: #FFFFFF;float: left;width: 100vw;height: 100vh;">

		<view class="upLoad">
			<view class="upLoadIcon  ">
				<view class="up1"></view>
				<view class="up2"></view>
			</view>
			<text class="upLoadText">点击上传 营业执照</text>
		</view>
		<view class="upLoad">
			<view class="upLoadIcon  ">
				<view class="up1"></view>
				<view class="up2"></view>
			</view>
			<text class="upLoadText">点击上传 就医许可证</text>


		</view>
		<text style="color:rgba(177,177,177,1);font-size:22upx;margin-left:57upx;animation: 10upx;">注册成功后，密码会自动下发至您的手机</text>
		<view class=" flex flex-direction">
			<button class="cu-btn bg-register margin-tb-sm lg">注册</button>
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
		methods: {
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
			ViewImage(e) {
				uni.previewImage({
					// urls: this.imgList,\
					// current: e.currentTarget.dataset.url
				});
			},
		}
	}
</script>

<style lang="scss">
	@import "@/pages/registerUpload/registerUpload.scss"
</style>
