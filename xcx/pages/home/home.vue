<template>
	<view class="page">
		<view class="headBox">

			<Search />
			<!-- banner -->
			<view style="border-radius: 22upx;">
				<swiper style="border-radius: 22upx;" class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
				 :autoplay="true" interval="5000" duration="500">
					<swiper-item style="border-radius: 22upx;" v-for="(item,index) in swiperList" :key="index">
						<image style="border-radius: 22upx;" :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</swiper-item>
				</swiper>

			</view>
			<!-- 九宫格 -->
			<view class="jiugong">
				<view class="jiuList">
					<view class="image">
						<image src="../../static/images/home/yymz.png"></image>
					</view>
					<text>医用棉质</text>
				</view>
				<view class="jiuList">
					<view class="image">
						<image src="../../static/images/home/xdy.png"></image>
					</view>
					<text>消毒防护</text>
				</view>
				<view class="jiuList">
					<view class="image">
						<image src="../../static/images/home/ssqx.png"></image>
					</view>
					<text>手术器械</text>
				</view>
				<view class="jiuList">
					<view class="image">
						<image src="../../static/images/home/yl.png"></image>
					</view>
					<text>家用医疗</text>
				</view>
				<view class="jiuList">
					<view class="image">
						<image src="../../static/images/home/jc.png"></image>
					</view>
					<text>检测设备</text>
				</view>
				<view class="jiuList">
					<view class="image">
						<image src="../../static/images/home/sk.png"></image>
					</view>
					<text>伤口处理</text>
				</view>
				<view class="jiuList">
					<view class="image">
						<image src="../../static/images/home/yygj.png"></image>
					</view>
					<text>医学用具</text>
				</view>
				<view class="jiuList">
					<view class="image">
						<image src="../../static/images/home/sl.png"></image>
					</view>
					<text>塑料制品</text>
				</view>
			</view>
			<!-- 商城频道			 -->
			<view class="mall">
				<view class="title">
					<text class="malltitle" style="font-size:32upx;font-weight:400;color:rgba(37,37,37,1);margin-left: 2%;">商城频道</text>
					<text class="more">查看全部 ></text>
				</view>
				<view class="leftBanner">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg" mode="aspectFill"></image>

				</view>
				<view class="rightTopBanner">
					<view class="topImg">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg" mode="aspectFill"></image>
					</view>
				</view>
				<view class="reghtDownBanner">
					<view class="downImg">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<view class="classIfy">
				<view class="jiugong2">
					<view class="jiuList2">
						<view class="image2">
							<image src="../../static/images/home/jc1.png"></image>
						</view>
						<text>小型检测</text>
					</view>
					<view class="jiuList2">
						<view class="image2">
							<image src="../../static/images/home/zsyp.png"></image>
						</view>
						<text>注射用品</text>
					</view>
					<view class="jiuList2">
						<view class="image2">
							<image src="../../static/images/home/cxgl.png"></image>
						</view>
						<text>采血管类</text>
					</view>
					<view class="jiuList2">
						<view class="image2">
							<image src="../../static/images/home/yxyj.png"></image>
						</view>
						<text>医学用具</text>
					</view>
					<view class="jiuList2">
						<view class="image2">
							<image src="../../static/images/home/hltc.png"></image>
						</view>
						<text>护理推车</text>
					</view>
					<view class="jiuList2">
						<view class="image2">
							<image src="../../static/images/home/ylqx.png"></image>
						</view>
						<text>医疗器械</text>
					</view>
					<view class="jiuList2">
						<view class="image2">
							<image src="../../static/images/home/ssqx(1).png"></image>
						</view>
						<text>手术器械</text>
					</view>
					<view class="jiuList2">
						<view class="image2">
							<image src="../../static/images/home/wfb.png"></image>
						</view>
						<text>无纺布类</text>
					</view>
					<view class="jiuList2">
						<view class="image2">
							<image src="../../static/images/home/wfb.png"></image>
						</view>
						<text>无纺布类</text>
					</view>
					<view class="jiuList2">
						<view class="image2">
							<image src="../../static/images/home/wfb.png"></image>
						</view>
						<text>无纺布类</text>
					</view>
					<view class="jiuList2">
						<view class="image2">
							<image src="../../static/images/home/wfb.png"></image>
						</view>
						<text>无纺布类</text>
					</view>
					<view class="jiuList2">
						<view class="image2">
							<image src="../../static/images/home/wfb.png"></image>
						</view>
						<text>无纺布类</text>
					</view>
				
				</view>
				
				
				
			</view>
			<view class="smallShop">
				
					<view class="shopTit">
						<view class="titList">每日推荐</view>
						<view class="titList">精选套餐</view>
						<view class="titList">包邮专区</view>
						<view class="titList">好物专区</view>
					</view>
				<view class="shopBox">
					<view class="shopShow">
						<view class="showList">
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
							<view class="description">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制</view>
							<view class="price">¥65.00</view>
						</view>
					</view>

					<view class="shopShow">
						<view class="showList">
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
							<view class="description">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制</view>
							<view class="price">¥65.00</view>
						</view>
					</view>

					<view class="shopShow">
						<view class="showList">
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"></image>
							<view class="description">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制</view>
							<view class="price">¥65.00</view>
						</view>
					</view>
				</view>
				<view class="callMe">
					<text class="c1">联系我们</text>
					<text class="c2">招商合作</text>
				</view>
			</view>
		</view>


	</view>
	</view>
</template>

<script>
	import Search from "../../mycomponents/search/search"
	export default {
		components: {
			Search
		},
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 80,
					name: 'VR'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				}, {
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				}, {
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				}, {
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				}, {
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				}, {
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				}, {
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}],
				modalName: null,
				gridCol: 3,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
			};

		}
	}
</script>

<style scoped lang="scss">
	@import "@/pages/home/index.scss"
</style>
