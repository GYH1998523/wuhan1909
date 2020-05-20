<template>
  <div class="movie">
    <Head title="首页"></Head>
    <div class="zuida">
      <van-tabs
        color="#fb7299"
        title-active-color="#fb7299"
        swipeable
        animated
        sticky
        v-model="active"
      >
        <van-tab class="b" swipeable v-for="(item,index) in title" :title="item.text" :key="index">
          <!-- =========================== -->
          <!-- 首页 -->
          <!-- 轮播 -->

          <van-swipe
            v-if="active==0"
            :loop="true"
            indicator-color="#fb7299"
            :autoplay="3000"
            style="width:94%;margin:3%; height:3.6rem; transform: translateZ(0)"
          >
            <van-swipe-item v-for=" (item,index) in data.lunbo" :key="index">
              <img class="img" :src="item.pic" :data-id="item.id" @click="gotovideo(item.id)" />
            </van-swipe-item>
          </van-swipe>

          <ul
            @click="gotovideo(item.mid)"
            v-if="active==0"
            class="shouyeshow"
            v-for="(item,i) in data.shouye"
            :key="i"
          >
            <li class="left">
              <div class="smallimg">
                <div class="shouyesky">
                  <div class="skyleft">
                    <div style="float:left;width:46%;height:100%">
                      <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                    </div>
                    <div style="float:left;width:46%;height:100%">
                      <span style="font-size:12px;color:white">{{item.play |num}}</span>
                    </div>
                  </div>
                  <div class="skyright">
                    <div style="float:left;width:46%;height:100%">
                      <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                    </div>
                    <div style="float:left;width:46%;height:100%">
                      <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                    </div>
                  </div>
                </div>
                <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
              </div>
              <p class="miaosu">{{item.title}}</p>
            </li>
          </ul>
          <!-- ============================== -->
          <!-- 动画 -->

          <van-tabs
            color="#fb7299"
            title-active-color="#fb7299"
            v-if="active==1"
            scrollspy="true"
            sticky
          >
            <van-tab title="特摄">
              <ul
                v-if="item.typename=='特摄'"
                class="shouyeshow"
                v-for="(item,index) in data.donghua"
                :key="index"
                @click="gotovideo(item.mid)"
              >
                <li class="left">
                  <div class="smallimg">
                    <div class="shouyesky">
                      <div class="skyleft">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.play |num}}</span>
                        </div>
                      </div>
                      <div class="skyright">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                        </div>
                      </div>
                    </div>
                    <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
                  </div>
                  <p class="miaosu">{{item.title}}</p>
                </li>
              </ul>
            </van-tab>

            <!-- ++++++++++++++++++ -->
            <van-tab title="MMD·3D">
              <ul
                v-if="item.typename=='MMD·3D'"
                class="shouyeshow"
                v-for="(item,index) in data.donghua"
                :key="index"
                @click="gotovideo(item.mid)"
              >
                <li class="left">
                  <div class="smallimg">
                    <div class="shouyesky">
                      <div class="skyleft">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.play |num}}</span>
                        </div>
                      </div>
                      <div class="skyright">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                        </div>
                      </div>
                    </div>
                    <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
                  </div>
                  <p class="miaosu">{{item.title}}</p>
                </li>
              </ul>
            </van-tab>

            <!-- ++++++++++++++ -->
            <van-tab title="综合">
              <ul
                v-if="item.typename=='综合'"
                class="shouyeshow"
                v-for="(item,index) in data.donghua"
                :key="index"
                @click="gotovideo(item.mid)"
              >
                <li class="left">
                  <div class="smallimg">
                    <div class="shouyesky">
                      <div class="skyleft">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.play |num}}</span>
                        </div>
                      </div>
                      <div class="skyright">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                        </div>
                      </div>
                    </div>
                    <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
                  </div>
                  <p class="miaosu">{{item.title}}</p>
                </li>
              </ul>
            </van-tab>
          </van-tabs>
          <!-- ============================== -->

          <!-- 番剧 -->

          <van-tabs
            color="#fb7299"
            title-active-color="#fb7299"
            v-if="active==2"
            scrollspy="true"
            sticky
          >
            <van-tab title="完结动画">
              <ul
                v-if="item.tname=='完结动画'"
                class="shouyeshow"
                v-for="(item,index) in data.fanju"
                :key="index"
                @click="gotovideo(item.mid)"
              >
                <li class="left">
                  <div class="smallimg">
                    <div class="shouyesky">
                      <div class="skyleft">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.play |num}}</span>
                        </div>
                      </div>
                      <div class="skyright">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                        </div>
                      </div>
                    </div>
                    <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
                  </div>
                  <p class="miaosu">{{item.title}}</p>
                </li>
              </ul>
            </van-tab>

            <!-- ++++++++++++++++++ -->
            <van-tab title="连载动画">
              <ul
                v-if="item.typename=='连载动画'"
                class="shouyeshow"
                v-for="(item,index) in data.fanju"
                :key="index"
                @click="gotovideo(item.mid)"
              >
                <li class="left">
                  <div class="smallimg">
                    <div class="shouyesky">
                      <div class="skyleft">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.play |num}}</span>
                        </div>
                      </div>
                      <div class="skyright">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                        </div>
                      </div>
                    </div>
                    <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
                  </div>
                  <p class="miaosu">{{item.title}}</p>
                </li>
              </ul>
            </van-tab>

            <!-- ++++++++++++++ -->
            <van-tab title="官方延伸">
              <ul
                v-if="item.typename=='官方延伸'"
                class="shouyeshow"
                v-for="(item,index) in data.fanju"
                :key="index"
                @click="gotovideo(item.mid)"
              >
                <li class="left">
                  <div class="smallimg">
                    <div class="shouyesky">
                      <div class="skyleft">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.play |num}}</span>
                        </div>
                      </div>
                      <div class="skyright">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                        </div>
                      </div>
                    </div>
                    <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
                  </div>
                  <p class="miaosu">{{item.title}}</p>
                </li>
              </ul>
            </van-tab>
          </van-tabs>
          <!-- ============================== -->

          <!-- 国产 -->

          <van-tabs
            color="#fb7299"
            title-active-color="#fb7299"
            v-if="active==3"
            scrollspy="true"
            sticky
          >
            <van-tab title="国产动画">
              <ul
                v-if="item.typename=='国产动画'"
                class="shouyeshow"
                v-for="(item,index) in data.guochan"
                :key="index"
                @click="gotovideo(item.mid)"
              >
                <li class="left">
                  <div class="smallimg">
                    <div class="shouyesky">
                      <div class="skyleft">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.play |num}}</span>
                        </div>
                      </div>
                      <div class="skyright">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                        </div>
                      </div>
                    </div>
                    <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
                  </div>
                  <p class="miaosu">{{item.title}}</p>
                </li>
              </ul>
            </van-tab>

            <!-- ++++++++++++++++++ -->
            <van-tab title="国产原创相关">
              <ul
                v-if="item.typename=='国产原创相关'"
                class="shouyeshow"
                v-for="(item,index) in data.guochan"
                :key="index"
                @click="gotovideo(item.mid)"
              >
                <li class="left">
                  <div class="smallimg">
                    <div class="shouyesky">
                      <div class="skyleft">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.play |num}}</span>
                        </div>
                      </div>
                      <div class="skyright">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                        </div>
                      </div>
                    </div>
                    <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
                  </div>
                  <p class="miaosu">{{item.title}}</p>
                </li>
              </ul>
            </van-tab>

            <!-- ++++++++++++++ -->
            <van-tab title="布袋戏">
              <ul
                v-if="item.typename=='布袋戏'"
                class="shouyeshow"
                v-for="(item,index) in data.guochan"
                :key="index"
                @click="gotovideo(item.mid)"
              >
                <li class="left">
                  <div class="smallimg">
                    <div class="shouyesky">
                      <div class="skyleft">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.play |num}}</span>
                        </div>
                      </div>
                      <div class="skyright">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                        </div>
                      </div>
                    </div>
                    <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
                  </div>
                  <p class="miaosu">{{item.title}}</p>
                </li>
              </ul>
            </van-tab>
          </van-tabs>
          <!-- ============================== -->

          <!-- 鬼畜 -->

          <van-tabs
            color="#fb7299"
            title-active-color="#fb7299"
            v-if="active==4"
            scrollspy="true"
            sticky
          >
            <van-tab title="音MAD">
              <ul
                v-if="item.typename=='音MAD'"
                class="shouyeshow"
                v-for="(item,index) in data.guichu"
                :key="index"
                @click="gotovideo(item.mid)"
              >
                <li class="left">
                  <div class="smallimg">
                    <div class="shouyesky">
                      <div class="skyleft">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.play |num}}</span>
                        </div>
                      </div>
                      <div class="skyright">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                        </div>
                      </div>
                    </div>
                    <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
                  </div>
                  <p class="miaosu">{{item.title}}</p>
                </li>
              </ul>
            </van-tab>

            <!-- ++++++++++++++++++ -->
            <van-tab title="人力VOCALOID">
              <ul
                v-if="item.typename=='人力VOCALOID'"
                class="shouyeshow"
                v-for="(item,index) in data.guichu"
                :key="index"
                @click="gotovideo(item.mid)"
              >
                <li class="left">
                  <div class="smallimg">
                    <div class="shouyesky">
                      <div class="skyleft">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.play |num}}</span>
                        </div>
                      </div>
                      <div class="skyright">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                        </div>
                      </div>
                    </div>
                    <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
                  </div>
                  <p class="miaosu">{{item.title}}</p>
                </li>
              </ul>
            </van-tab>

            <!-- ++++++++++++++ -->
            <van-tab title="鬼畜调教">
              <ul
                v-if="item.typename=='鬼畜调教'"
                class="shouyeshow"
                v-for="(item,index) in data.guichu"
                :key="index"
                @click="gotovideo(item.mid)"
              >
                <li class="left">
                  <div class="smallimg">
                    <div class="shouyesky">
                      <div class="skyleft">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="leftpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.play |num}}</span>
                        </div>
                      </div>
                      <div class="skyright">
                        <div style="float:left;width:46%;height:100%">
                          <img style="width:55%;height:65%;margin:14%;" :src="rightpng" alt />
                        </div>
                        <div style="float:left;width:46%;height:100%">
                          <span style="font-size:12px;color:white">{{item.video_review |num}}</span>
                        </div>
                      </div>
                    </div>
                    <img style="width:100%;height:100%" :src="item.pic" alt :data-mid="item.mid" />
                  </div>
                  <p class="miaosu">{{item.title}}</p>
                </li>
              </ul>
            </van-tab>
          </van-tabs>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
import { Tab, Tabs } from "vant";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  mounted() {
    if (!this.data.lunbo.length > 0) {
      this.getlunbo({
        url: "/vue/lunbo",
        cb: () => {}
      });

      this.getshouye({
        url: "/vue/shouye",
        cb: () => {}
      });

      this.getdonghua({
        url: "/vue/donghua",
        cb: () => {}
      });
      this.getfanju({
        url: "/vue/fanju",
        cb: () => {}
      });
      this.getguochan({
        url: "/vue/guochan",
        cb: () => {}
      });
      this.getguichu({
        url: "/vue/guichu",
        cb: () => {}
      });
    }
  },
  updated() {},
  methods: {
    ...mapActions([
      "getlunbo",
      "getshouye",
      "getdonghua",
      "getfanju",
      "getguochan",
      "getguichu"
    ]),
    ...mapMutations(["postmid"]),
    gotovideo(mid) {
      this.postmid(mid);
      this.$router.push({ name: "video", query: { mid: mid } });
    }
  },
  computed: {
    ...mapState(["data"])
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
  },
  data() {
    return {
      active: 0,
      // lunbo: {},
      title: [
        { text: "首页" },
        { text: "动画" },
        { text: "番剧" },
        { text: "国产" },
        { text: "鬼畜" }
      ],
      leftpng: require(`@/assets/images/left.png`),
      rightpng: require(`@/assets/images/right.png`),
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000
        },
        // effect: "cube", //立体3D！！！！！！！！

        cubeEffect: {
          // slideShadows: true,
          // shadow: true,
          // shadowOffset: 100,
          shadowScale: 0
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    };
  }
};
</script>
<style scoped>
.skyleft {
  width: 46%;
  height: 80%;
  margin: 2%;
  float: left;
}
.skyright {
  width: 46%;
  height: 80%;
  float: left;
  margin: 2%;
}
.shouyesky {
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0.1rem;
  background-color: rgba(179, 179, 179, 0.3);
}
#li_type {
  width: 100%;
  height: 1rem;

  background-color: rgb(148, 100, 100);
}
.movie_main {
  /* float: left; */
  width: 100%;
  margin-top: 2%;
}
.movie_main li {
  width: 46%;
  height: 3rem;
  margin: 2%;
  float: left;
}

.movie_head {
  height: 1rem;
}
.movie_head li {
  float: left;
  width: 20%;

  height: 1rem;
  text-align: center;
  line-height: 1rem;
  white-space: wrap;
  color: #7d7e80;
}
.movie_session {
  width: 94%;
  margin: 0 3% 3% 3%;
  overflow: hidden;
}

.miaosu {
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
.smallimg {
  width: 100%;
  height: 70%;
  border-radius: 0.2rem;
  /* box-shadow: 0.2rem 0.2rem 0.2rem inset;
   */
  border: 1px solid rgb(224, 227, 228);
  box-sizing: border-box;
  position: relative;
}
.smallimg img {
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
}
.right {
  float: left;
  width: 46%;
  height: 100%;
  margin: 2%;
}
.left {
  /* float: left; */
  width: 98%;
  height: 100%;
  margin: 1%;
  overflow: hidden;
}
.shouyeshow {
  width: 46%;
  margin: 2%;
  height: 3rem;
  float: left;
  border-radius: 0.2rem;
}

.b {
  position: static;
  top: 0rem;
  left: 0;
  height: 10.5rem;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: hidden;
}
.img {
  width: 100%;
  /* height: 100%; */
  height: 3.6rem;
  border-radius: 0.3rem;
}
.zuida {
  position: fixed;
  top: 1rem;
  left: 0;
  width: 100%;
  height: 11.3rem;
}
.m-img {
  width: 96%;
  height: 3.5rem;
  margin-left: 2%;
  margin-top: 2%;
  border-radius: 0.1rem;
}
</style>