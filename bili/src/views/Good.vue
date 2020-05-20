<template>
  <div class="good">
    <Head title="记录"></Head>
    <div v-if="watch.length==0">
      <img class="img_null" :src="pic" alt />
      <p class="p_null">您还没观看任何视频呢</p>
    </div>
    <!-- <div v-else> -->
    <div v-else>
      <!-- <div class="recommend" v-for="(item,i) in searchinfo" :key="i"> -->
      <div class="recommend" v-for="(item,idx) in watch" :key="idx">
        <h2
          v-if="idx==0"
          style="font-size:16px;color:rgb(124, 124, 124);margin:0.5rem"
        >有{{watch.length}}条观看记录</h2>

        <ul class="recommendvideo" @click.stop="gotovideo(item.mid)">
          <!-- <div style="color:#888" v-if="watch.length"> -->
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
              <van-icon name="clock-o" />
              <span style="color: #736b6b ;margin-left:0.2rem">{{item.time |time}}</span>
            </div>
          </li>
          <li @click.stop="deletewatch(item.uid)" style="height:100%">
            <div class="recommendrightmax">
              <van-icon name="cross" />
            </div>
          </li>
        </ul>
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
      active: 0,
      keyword: this.$route.query.keyword,
      watch: [],
      num: "",
      pic: require(`@/assets/images/nofont.png`),
      mobile: sessionStorage.mobile,
      show: false
    };
  },
  computed: {
    ...mapState(["data"])
  },
  mounted() {
    this.deletewatch();
    this.$axios
      .post("/vue/watchhistories", { mobile: this.mobile })
      .then(res => {
        this.watch = res.data.data1;
        console.log(this.watch);
      });
    // this.$axios.post("/vue/time", { mobile: this.mobile }).then(res => {
    //   this.time = res.data.result;
    // });
  },
  methods: {
    ...mapActions([""]),

    paixu() {},
    gotosearch() {
      this.$router.go(-1);
    },
    showmore() {
      Toast("没有更多了");

      var flag = 1;
      this.$axios({
        url: "/vue/getsearchvideo",
        params: { keyword: this.keyword }
      }).then(res => {
        this.searchinfo = res.data.result;
      });
    },
    gotovideo(mid) {
      this.$router.push({ name: "video", query: { mid: mid } });
    },
    deletewatch(uid) {
      this.$axios.post("/vue/deletewatch", { uid: uid }).then(res => {
        Toast("删除后记得刷新页面哦");
      });
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
    },
    time(value) {
      if (!value) return value;
      value = value
        .toString()
        .split("")
        .reverse();
      value.splice(0, 14).reverse();
      return value.reverse().join("");
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
  width: 3.2rem;
}
.recommendmaxright {
  text-align: center;
  position: relative;
}
.recommendrightmax {
  float: right;
  line-height: 1.4rem;
  height: 100%;
  width: 0.4rem;
  background-color: rgb(180, 180, 180);
  text-align: center;
}
.zhankaishow {
  position: absolute;
  top: 0.5rem;
  right: 0.3rem;
  width: 2rem;
  height: 0.5rem;
  background-color: rgb(170, 170, 170);
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
  color: #7d7e80;
  width: 3rem;
  margin: 0.6rem auto;
}
</style>