<template>
  <div class="head">
  
        <div class="logo">
      <img :src="img" alt @click="gotoBack" />
    </div>
    <van-nav-bar :title="title" :left-text="show?'返回':''" :left-arrow="show">
      <van-icon v-if="!login" class="l-rirht" @click="gotoLogin" name="contact" slot="right" />
      <van-icon v-if="!search" @click="gotoSearch" name="search" slot="right" />
    </van-nav-bar>

  </div>
</template>
<script>
export default {
  props: ["show", "title", "login", "search"],
  data() {
    return {
      img: require(`@/assets/images/logo.png`)
    };
  },
  methods: {
    gotoBack() {
      this.$router.push({ name: "movie" });
    },
    gotoSearch() {
      this.$router.push({ name: "search" });
    },
    gotoLogin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style scoped>
.van-nav-bar__title {
  color: rgb(124, 124, 124);
}
.l-rirht {
  margin-right: 0.5rem;
}
.logo {
  width: 24%;
  height: 5%;
  position: absolute;
  top: 1%;
  left: 3%;
  z-index: 999;
}
.logo img {
  width: 100%;
  height: 100%;
}

.head{
  height:1rem;
}
</style>