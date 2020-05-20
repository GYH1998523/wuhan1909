<template>
	<view>
		<view class="cu-bar search bg">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="快来搜索你想要的"
				 confirm-type="search"></input>
			</view>
			<view class="action">
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

<style lang="scss">
	.bg {
		background:rgba(28,125,246,1);
		height: 120upx;
	}
</style>
