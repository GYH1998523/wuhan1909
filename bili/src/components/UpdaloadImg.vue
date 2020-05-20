<template>
  <div>
    <div class="show1">
      <van-image class="touxiangq" round src />
      <van-image id="touxaing1" round width="2rem" height="2rem" :src="pic" @click="handleclick" />
      <input type="file" class="inpfile" ref="file" @change="sendImgFile" />
    </div>
  </div>
</template>
<script>
import initPic from "@/assets/images/b7.jpg";
import { baseURL } from "@/utils";

export default {
  data() {
    return {
      pic: initPic
    };
  },
  mounted() {
    // 先判断 localStorage
    // 有没有上传过头像
    // 还要判断手机号  的头像  寻找此次手机号的头像  直接取地址头像
    // 本地没有存储
    var userInfo = localStorage.userInfo;
    // 假如用户登录后换过一次头像的话
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      if (userInfo.mobile == sessionStorage.mobile) {
        this.pic = userInfo.pic;
      } else {
        this.getServerPic();
      }
    } else {
      this.getServerPic();
    }
  },
  methods: {
    getServerPic() {
      this.$axios({
        url: "/vue/getAvatarImg",
        method: "POST"
      }).then(res => {
        // 判断用户是否是新用户
        if (!!res.data.type) {
          // 改过头像用改过的头像

          this.pic = res.data.result.pic.replace(/public/, baseURL);
        } else {
          // 第一次进入用默认头像
          this.pic = initPic;
        }
      });
    },
    handleclick() {
      this.$refs.file.click();
    },
    sendImgFile() {
      // 需要发送服务端的图片数据
      var file = this.$refs.file.files[0];
      //实例化表单数据
      var data = new FormData();
      data.append("avatar", file);
      this.$axios({
        url: "/vue/uploadImg",
        method: "POST",
        data
      }).then(res => {
        this.pic = res.data.pic.replace(/public/, baseURL);
        let userInfo = {
          pic: res.data.pic.replace(/public/, baseURL),
          mobile: res.data.mobile
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      });
    }
  }
};
</script>
<style scoped>
.touxiang {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #000;
}
.inpfile {
  display: none;
}
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
  width: 100;
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
</style>
