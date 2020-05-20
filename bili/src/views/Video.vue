<template>
  <div class="video">
    <Header :title="data.videoInfo.title" :show="true "></Header>
    <div class="scroll">
      <!-- 头部 -->
      <div class="showvideo">
        <div class="showtitle">av{{mid}}</div>
        <img style="width:100%;height:100%" :src="data.videoInfo.pic" alt />
        <div class="duration">{{data.videoInfo.duration}}</div>
        <img @click="stopplay(mid)" class="playbutton" :src="play?stoppng:playpng" alt />
      </div>
      <!-- 视频简介，评论 -->
      <van-tabs color="#fb7299" title-active-color="#fb7299" class="tabtitle" v-model="active">
        <van-tab class="tabtitle" title="简介">
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item
              class="itemtitle"
              :title="data.videoInfo.title?data.videoInfo.title:'up主特别懒,什么也没说'"
              name="1"
            >
              <div style="height:0.4rem;float:left;">
                <span class="jieshao">
                  <img style="width:0.3rem;height:0.3rem" :src="leftpng" alt />
                </span>
                <span class="jieshao">{{data.videoInfo.play |num}}</span>
              </div>
              <div style="height:0.4rem;margin-left:0.3rem;">
                <span class="jieshao">
                  <img style="width:0.3rem;height:0.rem" :src="rightpng" alt />
                </span>
                <span class="jieshao">{{data.videoInfo.video_review |num}}</span>
                <span class="jieshao1">
                  <i class="iconfont" style="color:red">&#xe654;</i>未经作者授权禁止转载
                </span>
              </div>
            </van-collapse-item>
          </van-collapse>
          <div class="userinfo">
            <div style="width:1rem;height:1rem; float:left ;padding:3%   ">
              <img style="width:1rem;height:1rem;border-radius:50%;  " :src="initial" alt />
            </div>
            <div style="width:3rem;height:1rem;float:left  ">
              <p
                style="width:3rem;height:0.65rem;line-height:0.7rem ;font-size:14px;color:rgb(124, 124, 124)"
              >{{data.videoInfo.author}}</p>
              <p
                style="width:6rem;height:0.65rem;line-height:0.7rem ;font-size:12px;color:rgb(124, 124, 124)"
              >{{data.videoInfo.favorites?data.videoInfo.favorites:0}}粉丝</p>
            </div>

            <div
              class="guanzhu"
              :style="ico?' background-color:#fb7299;color:white':' background-color:#cac5c6;color:#828282'"
              @click="changeguanzhu"
            >
              <span class="guanzhuico">
                <van-icon :name="ico?'plus':'success'" />
              </span>
              {{ico?'关注':'已关注'}}
            </div>
          </div>
          <div class="dianzan">
            <dl>
              <dt @click="yingbi">
                <i
                  class="iconfont"
                  :style="color?'color: rgb(115, 107, 107); font-size: 16px;':'color:rgb(251, 114, 153);font-size: 16px;'"
                >&#xe69e;</i>

                <p>{{data.videoInfo.coins }}</p>
              </dt>
              <dt @click="dianzan">
                <i
                  class="iconfont"
                  :style="color1?'color: rgb(115, 107, 107); font-size: 16px;':'color:rgb(251, 114, 153);font-size: 16px;'"
                >&#xe60c;</i>

                <p>{{data.videoInfo.pts }}</p>
              </dt>
              <dt @click="xiazai">
                <i
                  class="iconfont"
                  :style="color2?'color: rgb(115, 107, 107); font-size: 16px;':'color:rgb(251, 114, 153);font-size: 16px;'"
                >&#xe6db;</i>

                <p>{{data.videoInfo.pts%100 }}</p>
              </dt>
              <dt @click="zhuanfa">
                <i
                  class="iconfont"
                  :style="color3?'color: rgb(115, 107, 107); font-size: 16px;':'color:rgb(251, 114, 153);font-size: 16px;'"
                >&#xe637;</i>

                <p>{{data.videoInfo.favorites }}</p>
              </dt>
              <dt @click="shoucang">
                <i
                  class="iconfont"
                  :style="color4?'color: rgb(115, 107, 107); font-size: 16px;':'color:rgb(251, 114, 153);font-size: 16px;'"
                >&#xe62b;</i>
                <p>{{data.videoInfo.favorites }}</p>
              </dt>
            </dl>
          </div>

          <div class="recommend">
            <p style="font-size:16px;color:rgb(234, 133, 162);margin-left:0.5rem">猜你喜欢</p>

            <ul
              class="recommendvideo"
              v-for="(item,i) in data.somevideo"
              :key="i"
              @click="gotovideo(item.mid)"
            >
              <li class="recommendleft">
                <img :src="item.pic" alt />
              </li>
              <li class="recommendright">
                <div class="van-multi-ellipsis--l2">{{item.title}}</div>
                <div class="div1">
                  <i class="iconfont" style="color:#736b6b">&#xe665;</i>
                  <span>{{item.author}}</span>
                </div>
                <div class="div1">
                  <i class="iconfont" style="color: #736b6b">&#xe609;</i>
                  <span>{{item.pts|num}}</span>
                  <i class="iconfont" style="color: #736b6b;margin-left:0.5rem;">&#xe69f;</i>
                  <span>{{item.play| num}}</span>
                  <!-- <i
                    class="iconfont"
                    style="color: #736b6b;font-size:16px;margin-left:0.5rem;"
                  >&#xe69f;</i>

                  <span>{{item.play| num}}</span>-->
                </div>
              </li>
              <li class="recommendmaxright">
                <div class="jiantou" v-if="watch"></div>
                <div class="zhankaishow" v-if="watch">
                  <i style="font-size:16px;color:rgb(251, 114, 153)" class="iconfont">&#xe64f;</i>
                  <span style="color:rgb(251, 114, 153)">稍后再看</span>
                </div>
                <i class="iconfont" style="color:#736b6b" @click="zhankai">&#xe679;</i>
              </li>
            </ul>
          </div>
        </van-tab>
        <!-- =========================================================
        ====================================================-->
        <!-- 评论 -->
        <van-tab class="tabtitle" :title="'评论'+data.videoInfo.video_review">
          <div>我有一只小毛驴，我从来也不骑</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { Toast } from "vant";
export default {
  data() {
    return {
      leftpng: require(`@/assets/images/left1.png`),
      rightpng: require(`@/assets/images/right1.png`),
      mid: this.$route.query.mid,
      play: true,
      ico: true,
      playpng: require(`@/assets/images/play.png`),
      stoppng: require(`@/assets/images/stop.png`),
      initial: require(`@/assets/images/initial.jpg`),
      active: 0,
      activeName: 1,
      tyname: this.$store.state.data.videoInfo.typename,
      watch: false,
      aid: "",
      color: true,
      color1: true,
      color2: true,
      color3: true,
      color4: true
    };
  },
  computed: {
    ...mapState(["data"])
  },
  methods: {
    gotovideo(mid) {
      Toast("我猜你不喜欢");
      // console.log(this.mid)
      // this.$router.query.mid=this.mid
    },
    yingbi() {
      this.color = !this.color;
    },
    dianzan() {
      this.color1 = !this.color1;
    },
    xiazai() {
      this.color2 = !this.color2;
    },
    zhuanfa() {
      this.color3 = !this.color3;
    },
    shoucang() {
      this.color4 = !this.color4;
    },
    ...mapActions(["getvideoInfo", "getsomevideo"]),
    changeguanzhu() {
      this.ico = !this.ico;
    },
    zhankai() {
      // 猜你喜欢右侧
      this.watch = !this.watch;
    },
    stopplay(mid) {
      this.$axios.post("/vue/watch", { watch: this.mid }).then(res => {});

      this.play = !this.play;
      this.aid = this.data.videoInfo.aid;
      window.location.href = `https://m.bilibili.com/video/av${this.aid}`;
    }
  },
  mounted() {
    this.getvideoInfo({
      url: "/vue/getvideoInfo",
      mid: this.$route.query.mid,

      cb: () => {}
    });
    this.getsomevideo({
      url: "/vue/getsomevideo",
      cb: () => {
        console.log(this.$store.state);
      }
    });
    this.aid = this.data.videoInfo.aid;
  },
  filters: {
    num(value) {
      if (!value) return value;
      value = value.toString().split("");
      var a = value.reverse();
      for (var i in a) {
        if (a.length - 1 > 3) {
          a.splice(0, 4).reverse();
          return value.reverse().join("") + "万";
        } else {
          return value.reverse().join("");
        }
      }
      return value;
    }
  }
};
</script>
<style lang="scss" scoped>
.van-cell {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #7d7e80;
  font-size: 14px;
}
.showvideo {
  width: 100%;
  height: 4rem;
  position: relative;
  .showtitle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.5rem;
    color: white;
    text-align: center;
  }
  .duration {
    position: absolute;
    bottom: 7%;
    left: 3%;
    width: 20%;
    height: 10%;
    background-color: rgb(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.7);
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
  }
  .playbutton {
    width: 12%;
    height: 24%;
    position: absolute;
    right: 3%;
    bottom: 5%;
  }
}
.userinfo {
  width: 100%;
  height: 1.4rem;
}
.guanzhu {
  width: 1.8rem;
  height: 0.6rem;
  float: right;
  margin-top: 0.3rem;
  margin-right: 0.3rem;
  text-align: center;
  color: white;
  line-height: 0.6rem;
  border-radius: 0.05rem;
}
.jieshao {
  float: left;
  height: 0.5rem;
  line-height: 0.3rem;
}
.jieshao1 {
  float: left;
  height: 0.5rem;
  line-height: 0.3rem;
  margin-left: 1rem;
}
.dianzan {
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid rgb(235, 235, 235);
  margin: 0;
}
.dianzan dt {
  float: left;
  width: 15%;
  text-align: center;
}
.dianzan dt p {
  text-align: center;
  font-size: 10px;
  color: rgb(173, 173, 173);
}
.dianzan dt i {
  text-align: center;
  font-size: 20px;
  color: rgb(173, 173, 173);
}
.recommend {
  width: 100%;
  padding-bottom: 1rem;
}
.recommendvideo {
  width: 94%;
  height: 1.6rem;
  margin: 3% 3% 0% 3%;
  border-bottom: 1px solid rgb(233, 233, 233);
}
.recommendleft {
  float: left;
  height: 1.4rem;
  width: 2.6rem;
}
.recommendright {
  float: left;
  margin: 0 0.2rem 0 0.2rem;
  height: 1.4rem;
  width: 3.6rem;
}
.recommendmaxright {
  text-align: center;
  position: relative;
}
.zhankaishow {
  position: absolute;
  top: 0.5rem;
  right: 0.3rem;
  width: 2rem;
  height: 0.5rem;
  background-color: rgb(216, 216, 216);
}
.jiantou {
  position: absolute;
  width: 0;
  border: 0.2rem solid;
  border-color: transparent rgb(216, 216, 216) transparent transparent;
  top: 0.3rem;
  right: 0.3rem;
}
.recommendvideo li img {
  height: 1.4rem;
  width: 2.6rem;
  border-radius: 0.2rem;
}
.recommendvideo li i {
  color: rgb(107, 107, 107);
  font-size: 12px;
}
.recommendvideo li span {
  color: rgb(107, 107, 107);
  font-size: 10px;
  margin-left: 0.1rem;
}
.van-multi-ellipsis--l2 {
  font-size: 12px;
  height: 0.7rem;
}
.div1 {
  height: 0.3rem;
}
.scroll {
  margin-top: 1rem;
}
</style>