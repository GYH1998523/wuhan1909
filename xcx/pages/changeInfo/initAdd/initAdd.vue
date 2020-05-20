<template>
<view style="">
		<view style="padding: 0 22upx;background-color: white;">
			<view class="cu-form-group">
				<input placeholder="收货人姓名" name="input"></input>
			</view>
			<view class="cu-form-group">
				<input placeholder="手机号码 " name="input"></input>
			</view>
			<view class="cu-form-group">
				<input placeholder="所在地区" name="input"></input>
			</view>
			<view class="cu-form-group cu-form-group1">
				<view class="title">城市</view>
				<picker mode="region" @change="RegionChange" :value="region">
				<!-- <picker mode="region" @change="RegionChange"> -->
					<view class="picker">
						{{region[0]}}，{{region[1]}}，{{region[2]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group align-start">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder="详细地址"></textarea>
			</view>
		</view>
		
		<view class="confirm">
			<checkbox class='round blue' :class="checkbox[2].checked?'checked':''" :checked="checkbox[2].checked?true:false"
								 value="C"></checkbox>
			<text style="margin-left: 22upx;">设为默认地址</text>
		</view>
		
		
		<view class=" flex flex-direction">
			<button class="cu-btn bg-register margin-tb-sm lg">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				region:["江西","南昌","南昌"]
			};
		},
		methods:{
				RegionChange(e) {
				this.region = e.detail.value
			},
		}
	}
</script>

<style lang="scss">
@import "./initAdd.scss"
</style>
