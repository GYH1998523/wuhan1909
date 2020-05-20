<template>
	<view>
		<!-- 	<view class="head">
			<view class="cu-bar  search">
				<text class="cuIcon-back text-white"></text>
				<view class="content" >购物车</view>
				<view class="action">删除</text></view>
			</view>
		</view> -->

		<view class="head">
			<view class="switch">
				<view class="danPin">单品</view>
				<view class="taoCan">套餐</view>
			</view>
			<text class="xia cuIcon-unfold"></text>
			<view class="delete">删除</view>
		</view>
		<view class="body">
			<view class="body_grey">
				<view class="info">
					<view style="width: 100%;height: 264upx;">
					<view class="cleckOne">
						<checkbox class="round blue" :class="checkbox[2].checked ? 'checked' : ''" :checked="checkbox[2].checked ? true : false" value="C"></checkbox>
					</view>
					<view class="image"><image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"></image></view>
					<view class="connBox">
						<view class="conn">电动护理床家用多功能老人瘫痪病 人全自动手电一体升降床翻身病床</view>
						<view class="cs">三层护理车</view>
						<view class="dataInfo">
							<view class="price">￥299.00</view>
							<view class="data">
								<view class="jisuan">
								</view>
							</view>
						</view>
					</view>
					</view>
				<view style="width: 100%;height: 264upx;">
					<view class="cleckOne">
						
					</view>
					<view class="image"><image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"></image></view>
					<view class="connBox">
						<view class="conn">电动护理床家用多功能老人瘫痪病 人全自动手电一体升降床翻身病床</view>
						<view class="cs">三层护理车</view>
						<view class="dataInfo">
							<view class="price">￥299.00</view>
							<view class="data">
								<view class="jisuan">
									<view class=" redu ">-</view>
									<view class="num">1</view>
									<view class="cu-bar add bg-white text-blue cuIcon-roundaddfill"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
				</view>
				
				
				
				
				
				
				
				<view class="info">
					<view style="width: 100%;height: 264upx;">
					<view class="cleckOne">
						<checkbox class="round blue" :class="checkbox[2].checked ? 'checked' : ''" :checked="checkbox[2].checked ? true : false" value="C"></checkbox>
					</view>
					<view class="image"><image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"></image></view>
					<view class="connBox">
						<view class="conn">电动护理床家用多功能老人瘫痪病 人全自动手电一体升降床翻身病床</view>
						<view class="cs">三层护理车</view>
						<view class="dataInfo">
							<view class="price">￥299.00</view>
							<view class="data">
								<view class="jisuan">
								</view>
							</view>
						</view>
					</view>
					</view>
				<view style="width: 100%;height: 264upx;">
					<view class="cleckOne">
						
					</view>
					<view class="image"><image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"></image></view>
					<view class="connBox">
						<view class="conn">电动护理床家用多功能老人瘫痪病 人全自动手电一体升降床翻身病床</view>
						<view class="cs">三层护理车</view>
						<view class="dataInfo">
							<view class="price">￥299.00</view>
							<view class="data">
								<view class="jisuan">
									<view class=" redu ">-</view>
									<view class="num">1</view>
									<view class="cu-bar add bg-white text-blue cuIcon-roundaddfill"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
				</view>
				
				
				<view class="info">
					<view style="width: 100%;height: 264upx;">
					<view class="cleckOne">
						<checkbox class="round blue" :class="checkbox[2].checked ? 'checked' : ''" :checked="checkbox[2].checked ? true : false" value="C"></checkbox>
					</view>
					<view class="image"><image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"></image></view>
					<view class="connBox">
						<view class="conn">电动护理床家用多功能老人瘫痪病 人全自动手电一体升降床翻身病床</view>
						<view class="cs">三层护理车</view>
						<view class="dataInfo">
							<view class="price">￥299.00</view>
							<view class="data">
								<view class="jisuan">
								</view>
							</view>
						</view>
					</view>
					</view>
				<view style="width: 100%;height: 264upx;">
					<view class="cleckOne">
						
					</view>
					<view class="image"><image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"></image></view>
					<view class="connBox">
						<view class="conn">电动护理床家用多功能老人瘫痪病 人全自动手电一体升降床翻身病床</view>
						<view class="cs">三层护理车</view>
						<view class="dataInfo">
							<view class="price">￥299.00</view>
							<view class="data">
								<view class="jisuan">
									<view class=" redu ">-</view>
									<view class="num">1</view>
									<view class="cu-bar add bg-white text-blue cuIcon-roundaddfill"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
				</view>
				
				
				
			</view>
			<view class="submitData">
				<view><checkbox class="round blue" :class="checkbox[2].checked ? 'checked' : ''" :checked="checkbox[2].checked ? true : false" value="C"></checkbox></view>
				<view class="allCheck">全选</view>
				<view style="">合计：</view>
				<view class="allPrice">￥299.00</view>
				<button class="cu-btn bg-blue shadow-blur round">结算</button>
			</view>
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
@import 'shoppingCart.scss';
</style>
