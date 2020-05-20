<template>
	<view>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 底部窗口
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="showModal" data-target="bottomModal">Bottom</button>
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<view class="padding-xl">
					<view class="title">产品参数</view>
					<view>
						<view class="list">
							<view class="list_title">品牌名称: </view>
							<view class="list_conn">Folee/富林
							</view>
						</view>
						<view class="list">
							<view class="list_title">型号: </view>
							<view class="list_conn">W006</view>
						</view>
						<view class="list">
							<view class="list_title">产地: </view>
							<view class="list_conn">江苏镇江</view>
						</view>
						<view class="list">
							<view class="list_title">颜色分类: </view>
							<view class="list_conn">W006雾化器欧盟CE认证-医</view>
						</view>
						<view class="list">
							<view class="list_title">生产企业: </view>
							<view class="list_conn">江苏富林医疗设备有限公司</view>
						</view>
						<view class="list">
							<view class="list_title">执行标准号:</view>
							<view class="list_conn">YZB/苏0704-2011</view>
						</view>

						<view class="list">
							<view class="list_title">适用人群:</view>
							<view class="list_conn">不限</view>
						</view>

						<view class="list">
							<view class="list_title">疾病:</view>
							<view class="list_conn">
								上呼吸道感染咽喉炎哮喘小儿症状，上
								呼吸道感染咽喉炎哮喘小儿症状
							</view>
						</view>


						<view class="list">
							<view class="list_title">症状: </view>
							<view class="list_conn">
								上呼吸道感染咽喉炎哮喘小儿,刺激性咳
								嗽呼吸困难咳喘咳嗽
							</view>
						</view>


						<view class="list">
							<view class="list_title">注册证号:</view>
							<view class="list_conn">苏械注准20172541406</view>
						</view>


						<view class="list">
							<view class="list_title">
								产品名称:
							</view>
							<view class="list_conn">雾化器</view>
						</view>

						<view class="list">
							<view class="list_title">雾化器类别:</view>
							<view class="list_conn">空气压缩雾化器</view>
						</view>
					</view>
					
					<view class="  flex-direction">
						<button class="cu-btn bg-register margin-tb-sm lg">确定</button>
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
				modalName: null,
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

<style lang="scss" scoped>
	@import "./goods_cs.scss"
</style>
