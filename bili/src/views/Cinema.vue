<template>
  <div>
    <Head title="频道"></Head>
    <div>
      <!-- <Header style class="lina" title="搜索" :show="true " :search="true"></Header> -->

      <div class="main">
        <!-- 推荐搜索 -->
        <div style="color:#888;margin-left:0.3rem;margin-top:0.3rem">部分频道</div>
        <div class="Searchhistory" @click="gotoFj">
          <img src="http://i2.hdslb.com/bfs/face/60a9153609998b04301dc5b8ed44c41b537a2268.jpg" alt />

          <p class="conent">哔哩哔哩番剧</p>
        </div>
        <div class="Searchhistory" @click="gotoTs">
          <img
            src="http://i0.hdslb.com/bfs/archive/a4e8034d00b581fe382de4f26c4b1ea13988e708.jpg"
            alt
          />

          <p class="conent">特摄</p>
        </div>
        <div class="Searchhistory" @click="gotoGf">
          <img
            src="http://i1.hdslb.com/bfs/archive/bd18dca295bd3872a66e87648896f9a4f5f65f73.jpg"
            alt
          />

          <p class="conent">官方延伸</p>
        </div>
        <div class="Searchhistory" @click="gotoRl">
          <img
            src="http://i2.hdslb.com/bfs/archive/35cc1d9f7c4805938710f93fb3ad29e0b747203d.jpg"
            alt
          />

          <p class="conent">人力VOCALOID</p>
        </div>
        <div class="Searchhistory" @click="gotoGc">
          <img
            src="http://i2.hdslb.com/bfs/archive/2657ddc48b1d74a37385410370e048c6470326f1.jpg"
            alt
          />

          <p class="conent">国产动画</p>
        </div>
      </div>
      <div class="show">
        <h4 style="color:#888;margin-left:0.3rem;margin-top:0.3rem">全部分区</h4>
        <div class="showlist" v-for="(item,i) in list" :key="i" @click="fenqu(item.text)">
          <p style="  font-size: 19px;  color: #fb7299;">
            <span class="iconfont" v-html="item.tu"></span>
          </p>

          <p style="  font-size: 10px;color: #888;">{{item.text}}</p>
        </div>
      </div>
      <div class="show">
        <h4 style="color:#888;margin-left:0.3rem;margin-top:0.3rem">再来一次</h4>
        <div class="showlist" v-for="(item,i) in list" :key="i" @click="fenqu(item.text)">
          <p style="  font-size: 19px;  color: #fb7299;">
            <span class="iconfont" v-html="item.tu"></span>
          </p>

          <p style="  font-size: 10px;color: #888;">{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

import { Toast } from "vant";
export default {
  data() {
    return {
      pic: require(`@/assets/images/search.png`),
      keyword: "",
      list: [
        { text: "动画", tu: "&#xe6d8;" },
        { text: "番剧", tu: "&#xe6d6;" },
        { text: "鬼畜", tu: "&#xe6d5;" },
        { text: "电视", tu: "&#xe6d4;" },
        { text: "记录", tu: "&#xe6a7;" },
        { text: "生活", tu: "&#xe6d8;" },
        { text: "时尚", tu: "&#xe6d9;" },
        { text: "放映", tu: "&#xe616;" },
        { text: "游戏", tu: "&#xe614;" },
        { text: "音乐", tu: "&#xe631;" },
        { text: "话题", tu: "&#xe622;" },
        { text: "漫画", tu: "&#xe61f;" },
        { text: "科技", tu: "&#xe630;" },
        { text: "舞蹈", tu: "&#xe66a;" },
        { text: "国漫", tu: "&#xe63b;" },
        { text: "完结动画", tu: "&#xe6d8;" },
        { text: "MAD·AMV", tu: "&#xe6d9;" },
        { text: "综合", tu: "&#xe616;" },
        { text: "MMD·3D", tu: "&#xe614;" },
        { text: "音MAD", tu: "&#xe631;" },
        { text: "鬼畜调教", tu: "&#xe622;" },
        { text: "科技", tu: "&#xe630;" },
        { text: "舞蹈", tu: "&#xe66a;" },
        { text: "国漫", tu: "&#xe63b;" },
        { text: "完结动画1", tu: "&#xe6d8;" },
        { text: "MAD·AMV1", tu: "&#xe6d9;" },
        { text: "综合1", tu: "&#xe616;" },
        { text: "MMD·3D1", tu: "&#xe614;" },
        { text: "音MAD", tu: "&#xe631;" },
        { text: "鬼畜调教", tu: "&#xe622;" }
      ],
      search1: true
    };
  },
  computed: {
    ...mapState(["data"])
  },
  mounted() {},
  methods: {
    fenqu(i) {
      console.log(i);
      this.$router.push({ name: "Searchinfo", query: { keyword: i } });
    },
    ...mapActions(["intsearchhistory"]),
    // ...mapMutations(["intsearchhistory"]),
    // search() {
    //   if (!this.keyword) {
    //     Toast("空内容是查不到您想要的呢");
    //   } else {
    //     this.list.unshift({ text: this.keyword });
    //     if (this.list.length > 6) {
    //       this.list.pop({ text: this.keyword });
    //     }
    //     this.keywordword = "";

    //     var keyword = this.keyword;
    //     this.$router.push({
    //       name: "Searchinfo",
    //       query: { keyword: this.keyword }
    //     });
    //   }

    //   this.$axios
    //     .post("/vue/intsearchhistory", {
    //       params: { commit: this.keyword, mobile: sessionStorage.mobile }
    //     })
    //     .then(res => {});
    // },
    goback() {
      this.$router.push({ name: "movie" });
    },
    gotoFj() {
      this.$router.push({
        name: "Searchinfo",
        query: { keyword: "哔哩哔哩番剧" }
      });
    },
    gotoTs() {
      this.$router.push({ name: "Searchinfo", query: { keyword: "特摄" } });
    },
    gotoGf() {
      this.$router.push({ name: "Searchinfo", query: { keyword: "官方延伸" } });
    },
    gotoRl() {
      this.$router.push({
        name: "Searchinfo",
        query: { keyword: "人力VOCALOID" }
      });
    },
    gotoGc() {
      this.$router.push({ name: "Searchinfo", query: { keyword: "国产动画" } });
    }
  },
  components: {
    // Head
  }
};
</script>
</script>
<style scoped>
.search1 {
  width: 80%;
  margin-left: 10%;
}
.action {
  position: absolute;
  top: 0rem;
  right: 0;
  z-index: 99;
  width: 1rem;
  height: 1.14rem;
  line-height: 1.1rem;
  background-color: rgb(255, 255, 255);
  text-align: center;
  color: rgb(88, 88, 88);
  color: #fb7299;
}
.goback {
  position: absolute;
  top: 0rem;
  left: 0;
  z-index: 99;
  height: 1.14rem;
  border: none;
  color: #fb7299;
  background-color: #fff;
}
.Searchhistory {
  float: left;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  border: 1px solid rgb(255, 255, 255);
  margin: 0.2rem;
  color: #868686;
  position: relative;
}
.Searchhistory img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.shijian {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  border: none;
  float: right;
  width: 0.6rem;
  height: 0.61rem;
  font-size: 20px;
}
.conent {
  position: absolute;
  top: 0.9rem;
  left: 0rem;
  width: 1rem;
  text-align: center;
  line-height: 0.6rem;
  overflow: hidden;
  /* margin-left: 0.6rem; */
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 10px;
}
.Searchhistorybtn {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  float: right;
  width: 0.6rem;
  height: 0.61rem;
  border-radius: 0rem 1rem 1rem 0rem;
}
.show {
  width: 100%;
  margin-top: 2rem;
}
.showlist {
  float: left;
  margin-top: 0.3rem;
  width: 20%;
  height: 1.2rem;
  /* background-color: rgb(214, 24, 24); */
  text-align: center;
  line-height: 0.48rem;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>