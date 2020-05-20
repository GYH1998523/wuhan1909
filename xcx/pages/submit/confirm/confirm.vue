<template>
	<view style="width: 100vw;height: 100vh;background-color: white;">
		<view class="hand_userInfo">
			<view class="font_icon"><checkbox class="round blue" :class="checkbox[2].checked ? 'checked' : ''" :checked="checkbox[2].checked ? true : false" value="C"></checkbox></view>

			<view class="userInfo">
				<view class="user_nameTEl">
					<text>张丽</text>
					<text style="margin-left: 20upx;">15048952030</text>
					<text class="moren">默认</text>
				</view>
				<view class="user_add">
					<text>地址:</text>
					<text style="margin-left: 20upx;">江西省南昌市西湖区八一大道</text>
				</view>
			</view>
			<!-- <view class="icon"><text class="cuIcon-right"></text></view> -->
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
@import './confirm.scss';
</style>
