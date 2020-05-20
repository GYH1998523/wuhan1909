<template>
  <div class="mine">
    <Head title="我的 " :search="true"></Head>
    <div v-if="true">
      <UpdaloadImg></UpdaloadImg>
      <van-cell-group class="user-group"></van-cell-group>
      <van-panel :title="username" desc="欢迎来到二次元的世界" status="(゜-゜)つロ 干杯~-bilibili"></van-panel>

      <van-cell-group>
        <van-cell-group>
          <van-switch-cell
            :icon="bilibili"
            v-model="checked"
            @click="changecheched"
            title="bilibili悬浮球"
          />
        </van-cell-group>
        <van-cell icon="records" title="修改密码" @click="gotochangepwd" is-link />
        <van-cell icon="points" title="个性签名" @click="geren" is-link />
        <van-cell icon="gold-coin-o" title="我的收藏" is-link />
        <van-cell icon="gift-o" title="浏览记录" is-link />
      </van-cell-group>

      <van-swipe-cell>
        <van-cell icon="close" :border="false" title="登录操作" value="轻滑退出登录" />
        <template slot="right">
          <van-button type="danger" text="退出登录" @click="backLogin" />
        </template>
      </van-swipe-cell>
    </div>
    <div v-else>
      <van-button plain @click="gotoLogin" type="info">前去登录</van-button>
    </div>
    <!-- <Bilibili v-if="checked"></Bilibili> -->
    <!-- <van-popup v-model="show"  /> -->

    <van-cell v-show="false" is-link @click="geren">展示弹出层</van-cell>

    <van-popup v-model="show" position="left" class="style" style=" herght:100%; width: 50% ">为了更美好的明天而战</van-popup>
  </div>
</template>
<script>
import UpdaloadImg from "@/components/UpdaloadImg.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      bilibili: require("@/assets/images/bilibili.png"),
      // checked: false
      username: localStorage.username,
      show: false
    };
  },
  computed: {
    checked: {
      get() {
        return this.$store.state.checked;
      },
      set(newVal) {
        this.$store.commit("changecheched", newVal);
      }
    },
    ...mapState(["data"])
  },
  methods: {
    ...mapActions(["getuserInfo"]),

    changecheched() {
      this.checked = this.checked;
    },
    backLogin() {
      // 退出登录
      // session.token=""
      sessionStorage.token = "";
      this.$router.push({ name: "login" });
    },
    gotoLogin() {
      // 去登录
      this.$router.push({ name: "login" });
    },

    gotochangepwd() {
      // 去修改密码

      this.$router.push({ name: "changepwd" });
    },
    geren() {
      this.show = !this.show;
    }
  },
  mounted() {
    //  获取用户信息来判断前后端token是否一致
    // if (this.data.userInfo.length > 0) {
    this.getuserInfo({
      url: "/vue/getuserInfo",
      cb: () => {
        localStorage.username = this.$store.state.data.userInfo.username;
        // console.log(this.$store.state.data.userInfo);
      }
    });
    // }
  },
  updated() {
    this.checked;
  },
  components: { UpdaloadImg }
};
</script> 
<style scoped>
.user-poster {
  width: 100%;
  height: 53vw;
  display: block;
}

.user-group {
  margin-bottom: 15px;
}
.user-links {
  padding: 15px 0;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
}
.van-icon {
  display: block;
  font-size: 24px;
}
.show1 {
  width: 100%;
  height: 3.5rem;
  border-radius: 50% 50% 2% 2%;
  background-color: rgb(243, 232, 232);
  background: url("http://img5.imgtn.bdimg.com/it/u=1042136360,1959855195&fm=26&gp=0.jpg");
  background-size: 100%;
}
#touxaing1 {
  position: absolute;
  top: 1.5rem;
  left: 37%;
  z-index: 3;
}
.touxiangq {
  position: absolute;
  top: 1.4rem;
  left: 35.8%;
  z-index: 2 !important;
  width: 2.2rem;
  height: 2.2rem;
  background: rgb(0, 183, 255);
}
.bilibili {
  height: 1rem;
  width: 1rem;
  z-index: 990;
  position: fixed;
  top: 50%;
  right: 50%;
  border-radius: 50%;
}
.bilibili img {
  width: 100%;
  height: 100%;
}
.style {
  height: 100%;
}
</style>