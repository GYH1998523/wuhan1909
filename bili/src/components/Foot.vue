<template>
  <footer class="foots">
    <div class="foot" v-for="(item,i) in foot" :key="i">
      <router-link :to="{name:item.name}">
        <i class="iconfont" v-html="item.icon"></i>

        <span>{{item.txt}}</span>
        <van-icon @click="lock" v-if="i==foot.length-1" class="hot" :dot="click?true:false" />
      </router-link>
    </div>
  </footer>
</template>
<script>
// import { $color } from "@/styles/index.scss";
// import Bilibili from "@/components/Bilibili.vue";
var checke1 = !!sessionStorage.checked;

export default {
  name: "foot",
  data() {
    return {
      // checked: checke1,

      foot: [
        { txt: "首页", path: "/main/movie", name: "movie", icon: "&#xe8ae;" },
        { txt: "频道", path: "/main/cinema", name: "cinema", icon: "&#xe8c0;" },
        { txt: "记录", path: "/main/good", name: "good", icon: "&#xe8ae;" },
        { txt: "我的", path: "/main/mine", name: "mine", icon: "&#xe614;" }
      ],
      click: true
    };
  },

  component: {
    // Bilibili
  },
  methods: {
    lock() {
      this.click = false;
    }
  },
  beforeRouteLeave(to, form, next) {
    next();
  }
};
</script>
<style lang="scss" scoped>
$bcolor: rgb(124, 124, 124);
$pcolor: #fb7299;
.foots {
  position: fixed;
  bottom: 0;
  left: 0;
  float: left;
  display: flex !important;
  width: 100%;
  // height: 8%;
  height: 1rem;
  z-index: 523;
  background-color: #fff;
  .foot {
    width: 25%;
    flex: 1;

    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      box-sizing: border-box;
      padding: 0.06rem 0;
      position: relative;
      color: $bcolor;
      i {
        width: 100%;
        height: 0.45rem;
        line-height: 0.45rem;
        font-size: 0.42rem !important;
      }
      span {
        width: 100%;
        height: 0.35rem;
        line-height: 0.35rem;
        font-size: 0.26rem;
      }
      .hot {
        position: absolute;
        top: 20%;
        left: 60%;
        display: inline;
        width: 0.25rem;
        border-radius: 50%;
      }
    }
    .nav-active,
    .router-link-exact-active {
      color: $pcolor;
      border-color: $pcolor;
    }
  }
}
</style>
