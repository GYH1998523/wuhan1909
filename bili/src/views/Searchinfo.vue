<template>
  <div class="Searchinfo">
    <Headersear title="搜索详情" :show="true " :search="true"></Headersear>
    <div v-if=" searchinfo.length==0 " @click="gotosearch">
      <img class="img_null" :src="pic" alt />
      <p class="p_null">数据空空如也，再去搜索下吧</p>
    </div>
    <div v-else>
      <van-tabs
        color="#fb7299"
        title-active-color="#fb7299"
        v-model="active"
        @click="paixu"
        :sticky="true"
      >
        <van-tab v-for="(item,index) in title" :key="index" :title="item.text" :sort="item.sort"></van-tab>
      </van-tabs>
      <div class="recommend" v-for="(item,i) in searchinfo" :key="i">
        <h2
          v-if="i==0"
          style="font-size:16px;color:rgb(124, 124, 124);margin:0.5rem"
        >找到{{searchinfo.length}}条结果</h2>

        <ul class="recommendvideo" @click="gotovideo(item.mid)">
          <li class="recommendleft">
            <img :src="item.pic" alt />
          </li>
          <li class="recommendright">
            <div class="van-multi-ellipsis--l2">{{item.title}}</div>
            <div class="div1">
              <i class="iconfont" style="color:#736b6b">&#xe665;</i>
              <span>{{item.author }}</span>
            </div>
            <div class="div1">
              <i class="iconfont" style="color: #736b6b">&#xe609;</i>
              <span>{{item.play |num}}</span>
              <i class="iconfont" style="color: #736b6b;font-size:16px;margin-left:0.8rem">&#xe69f;</i>
              <span>{{item.video_review|num }}</span>
            </div>
          </li>
        </ul>

        <div class="p_show" v-if="searchinfo.length-1==i" @click="showmore">
          没有更多了
          <van-icon name="fail" />
        </div>
      </div>
      <!-- ========================================= -->

      <!-- ============================================ -->
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

import { Toast } from "vant";
export default {
  data() {
    return {
      title: [
        { text: "默认排序", sort: "1" },
        {
          text: "播放多",
          sort: "play= 1"
        },
        {
          text: "评论多",
          sort: "video_review= 1"
        },
        {
          text: "弹幕多",
          sort: " review= 1"
        }
      ],
      active: 0,
      keyword: this.$route.query.keyword,
      searchinfo: {},
      num: "",
      pic: require(`@/assets/images/null.png`)
      //   tiaoguo: 5
    };
  },
  computed: {
    ...mapState(["data"])
  },
  mounted() {
    this.$axios({
      url: "/vue/getsearchvideo",
      //   params: { keyword: this.keyword, flag: 0, tiaoguo: this.tiaoguo }
      params: { keyword: this.keyword }
    }).then(res => {
      this.searchinfo = res.data.result;
    });
  },
  methods: {
    ...mapActions([""]),

    paixu() {
      if (this.active == 0) {
        this.$axios({
          url: "/vue/getsearchvideo",
          params: { keyword: this.keyword }
        }).then(res => {
          this.searchinfo = res.data.result;
        });
      }

      if (this.active == this.active) {
        if (this.active == 0) {
          this.$axios({
            url: `/vue/getsearchvideo`,
            params: { keyword: this.keyword }
          }).then(res => {
            this.searchinfo = res.data.result;
          });
        } else {
          this.$axios({
            url: `/vue/getsearchvideo${this.active}`,
            params: { keyword: this.keyword }
          }).then(res => {
            this.searchinfo = res.data.result;
          });
        }
      }
    },
    gotosearch() {
      this.$router.go(-1);
    },
    showmore() {
      Toast("没有更多了");

      var flag = 1;
      this.$axios({
        url: "/vue/getsearchvideo",
        // params: { keyword: this.keyword, flag: 1, tiaoguo: this.tiaoguo }
        params: { keyword: this.keyword }
      }).then(res => {
        this.searchinfo = res.data.result;
      });
    },
    gotovideo(mid) {
      //   alert()
      this.$router.push({ name: "video", query: { mid: mid } });
    }
  },

  updated() {
    // this.showmore();
    this.tiaguo += this.tiaoguo;
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

.recommend {
  width: 100%;
  //   padding-bottom: 1rem;
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
  width: 4rem;
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
.img_null {
  width: 100%;
  margin-top: 2rem;
}
.p_null {
  text-align: center;
  font-size: 12px;
  margin-top: 0.6rem;
  color: #7d7e80;
}
.p_show {
  text-align: center;
  font-size: 12px;

  //   line-height: 0.6rem;
  color: #7d7e80;
  //   border: 1px solid rgb(66, 66, 66);
  width: 3rem;
  //   height: 0.6rem;
  margin: 0.6rem auto;
  //   border-radius: 1rem;
}
</style>