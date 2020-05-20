<template>
  <div>
    <!-- <Header style class="lina" title="搜索" :show="true " :search="true"></Header> -->

    <van-search class="search1" v-model="keyword" placeholder="请输入关键词 av号 标题 作者.." shape="round"></van-search>
    <div class="action" @click="search">搜索</div>

    <button class="goback" @click="goback">返回</button>

    <div class="main" v-if="search1">
      <!-- 推荐搜索 -->
      <div style="color:#888;margin-left:0.3rem;margin-top:0.3rem">大家都在搜</div>
      <div class="Searchhistory">
        <van-icon class="shijian" name="clock-o" />
        <p class="conent" @click="gotoZh">综合</p>
      </div>
      <div class="Searchhistory">
        <van-icon class="shijian" name="clock-o" />
        <p class="conent" @click="gotoLzdh">连载动画</p>
      </div>
      <div class="Searchhistory">
        <van-icon class="shijian" name="clock-o" />
        <p class="conent" @click="gotoBdx">布袋戏</p>
      </div>
      <div class="Searchhistory">
        <van-icon class="shijian" name="clock-o" />
        <p class="conent" @click="gotoGc">鬼畜调教</p>
      </div>
      <!-- 搜索历史 -->
      <div style="color:#888;margin-left:0.3rem;margin-top:0.3rem">搜索历史</div>

      <div class="Searchhistory" v-for="(item,index) in list" :key="index">
        <van-icon class="shijian" name="clock-o" />
        <p class="conent">{{item.text}}</p>
        <button class="Searchhistorybtn" @click="list.splice(index,1)">×</button>
      </div>
    </div>
    <!-- =========================================================================
===========================================================================
    ==================================================================================-->
    <!-- 这里是数据搜索后渲染的东西 -->
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

import { Toast } from "vant";
// import Head from "@/components/Head.vue";
export default {
  data() {
    return {
      pic: require(`@/assets/images/search.png`),
      keyword: "",
      list: [{ text: "111" }],
      search1: true
    };
  },
  computed: {
    ...mapState(["data"])
  },
  mounted() {},
  methods: {
    ...mapActions(["intsearchhistory"]),
    // ...mapMutations(["intsearchhistory"]),
    search() {
      if (!this.keyword) {
        Toast("空内容是查不到您想要的呢");
      } else {
        this.list.unshift({ text: this.keyword });
        if (this.list.length > 6) {
          this.list.pop({ text: this.keyword });
        }
        this.keywordword = "";

        var keyword = this.keyword;
        this.$router.push({
          name: "Searchinfo",
          query: { keyword: this.keyword }
        });
      }

      this.$axios
        .post("/vue/intsearchhistory", {
          params: { commit: this.keyword, mobile: sessionStorage.mobile }
        })
        .then(res => {});
    },
    goback() {
      this.$router.push({ name: "movie" });
    },
    gotoZh() {
      this.$router.push({ name: "Searchinfo", query: { keyword: "综合" } });
    },
    gotoLzdh() {
      this.$router.push({ name: "Searchinfo", query: { keyword: "连载动画" } });
    },
    gotoBdx() {
      this.$router.push({ name: "Searchinfo", query: { keyword: "布袋戏" } });
    },
    gotoGc() {
      this.$router.push({ name: "Searchinfo", query: { keyword: "鬼畜调教" } });
    }
  },
  components: {
    // Head
  }
};
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
  width: 3.3rem;
  height: 0.6rem;
  border-radius: 1rem;
  border: 1px solid rgb(139, 139, 139);
  margin: 0.2rem;
  color: #868686;
  position: relative;
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
  width: 2rem;
  text-align: center;
  line-height: 0.6rem;
  overflow: hidden;
  margin-left: 0.6rem;
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
</style>