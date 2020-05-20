<template>
	<view>
		<view class="cu-bar bg-white margin-top">
		<!-- 	<view class="action">
				<text class="cuIcon-title text-orange "></text> 底部窗口
			</view> -->
		<!-- 	<view class="action">
				<button class="cu-btn bg-green shadow" @tap="showModal" data-target="bottomModal">Bottom</button>
			</view> -->
		</view>
		<view class="cu-modal bottom-modal" :class="modalName=='show'?'show':''">
			<view class="cu-dialog">
				<view class="padding-xl">
					<view class="title">规格</view>
					<view>

						<text class="list">
							仪器+试纸100张
						</text>


						<text class="list">
							仪器+采血纸10张
						</text>


						<text class="list gray_text">
							仪器+采血纸10张+试纸50张
						</text>

					</view>
					<view class="title">数量
						<view class="jisuan">
							<view class=" redu ">-</view>
							<view class="num">1</view>
							<view class="cu-bar add bg-white text-blue cuIcon-roundaddfill"></view>
						</view>
					</view>
					<view class="  flex-direction">
						<button class="cu-btn bg-register margin-tb-sm lg">确定</button>
					</view>
				</view>

			</view>
		</view>
	</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				modalName: true,
				radio: 'radio1',
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			ChooseCheckbox(e) {
				let items = this.checkbox;
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
						break
					}
				}
			}
		}
	}
</script>

<style lang="scss" >
	@import "./goods_tc.scss"
</style>
