<template>
  <div class="login">
    <!-- <Head title="登录    /    注册" :show="true " :search="true" :login="true"></Head> -->

    <img :src="img" alt style="width:100%;margin:0 4%4% 0" />

    <van-tabs color="#ff9db5" title-active-color="#ff9db5" v-model="active" swipeable animated>
      <van-tab v-for="(item,index) in title" :title="item.txt" :key="index">
        <!-- 登录================================================== -->

        <van-cell-group v-if="index==0">
          <van-field
            v-model="login.mobile"
            maxlength="11"
            clearable
            label="手机号"
            placeholder="请输入手机号"
          />

          <van-field
            clearable
            v-model="login.password"
            :type="flag1?'text':'password'"
            label="密码"
            placeholder="请输入密码"
            :right-icon="flag1?'eye-o':'closed-eye'"
            @click-right-icon="change1"
          />

          <van-button class="gao_btn" color="#ff9db5" plain @click="regi">注册</van-button>
          <van-button color="#ff9db5" @click="todoLogin">登录</van-button>
          <p v-if="index==0">
            完成注册即代表你同意
            <a class="span" @click="yonghu">用户协议</a>和
            <a class="span" @click="yinsi">隐私政策</a>
          </p>

          <van-divider
            v-if="index==0"
            :style="{ color: '#7d7e80', borderColor: '#7d7e80', padding: '2rem 0.016rem  0.05rem  0.016rem' }"
          >其他登录方式</van-divider>
          <div style="text-align:center;" @click="QQ">
            <span id="icon" class="iconfont">&#xe633;</span>
            <span id="icon" class="iconfont">&#xe6f3;</span>
          </div>
          <div style="text-align:center" @click="QQ">
            <span style=" margin: 0 0.35rem; color: rgb(125, 126, 128);">微博</span>
            <span style=" margin: 0 0.35rem; color: rgb(125, 126, 128);">微信</span>
          </div>
        </van-cell-group>

        <!-- 注册================================================== -->

        <van-cell-group v-if="index==1">
          <van-field clearable v-model="register.username" label="用户名" placeholder="请输入用户名" />
          <van-field
            clearable
            v-model="register.mobile"
            type="tel"
            maxlength="11"
            label="手机号"
            placeholder="请输入手机号"
          />

          <van-field
            clearable
            v-model="register.password"
            :type="flag2?'text':'password'"
            label="密码"
            placeholder="请输入密码"
            :right-icon="flag2?'eye-o':'closed-eye'"
            @click-right-icon="change2"
          />
          <van-field
            clearable
            v-model="register.dbpwd"
            :type="flag3?'text':'password'"
            label="确认密码"
            placeholder="请确认密码"
            :right-icon="flag3?'eye-o':'closed-eye'"
            @click-right-icon="change3"
          />

          <van-button color="#ff9db5" plain @click="log">登录</van-button>
          <van-button color="#ff9db5" @click="todoRegister">同意并注册</van-button>
        </van-cell-group>
        <p v-if="index==1">
          完成注册即代表你同意
          <a class="span" @click="yonghu">用户协议</a>和
          <a class="span" @click="yinsi">隐私政策</a>
        </p>
        <!-- 手机验证================================================== -->

        <van-cell-group v-if="index==2">
          <van-field
            clearable
            v-model="mobile.mobile"
            type="tel"
            maxlength="11"
            label="手机号"
            placeholder="请输入手机号"
          />
          <van-field v-model="mobile.sms" center clearable label="验证码" placeholder="请输入短信验证码">
            <van-button id="gaobtn3" slot="button" size="small" color="#ff9db5">发送验证码</van-button>
          </van-field>
          <div>
            <van-button id="gaobtn2" color="#ff9db5" size="large">登录</van-button>
          </div>
        </van-cell-group>

        <!-- =========== -->
      </van-tab>
    </van-tabs>
    <!-- -============================= -->

    <van-popup v-model="show" closeable position="bottom" :style="{ height: '100%' }" />
    <van-popup v-model="show" :style="{ height: '60%',width:'100%' }">
      <p style="font-size:20px ;margin:6% 0">哔哩哔哩弹幕网用户使用协议</p>本协议是用户（下称“用户”或“您”）与哔哩哔哩之间的协议，哔哩哔哩将按照本协议约定之内容为您提供服务。“哔哩哔哩”是指哔哩哔哩和/或其相关服务可能存在的运营关联单位。若您不同意本协议中所述任何条款或其后对协议条款的修改，请您不要使用哔哩哔哩提供的相关服务。您的使用行为将视作对本协议全部条款的完全接受。请您仔细阅读本协议的全部条款与条件，尤其是协议中黑色加粗的条款。
      如您为未成年人的，请在法定监护人的陪同下阅读和判断是否同意本协议，特别注意未成年人条款。未成年人行使和履行本协议项下的权利和义务视为已获得监护人的认可。
    </van-popup>

    <van-popup v-model="show1" closeable position="bottom" :style="{ height: '100%' }" />
    <van-popup v-model="show1" :style="{ height: '60%',width:'100%' }">
      <p style="font-size:20px ;margin:6% 0">哔哩哔哩隐私政策</p>我们需要特别提醒您的是：由于我们的产品和服务较多，为您提供的内容也不同，因此核心业务功能（包括其收集的您的个人信息类型）也会因产品/服务的内容不同而有所区别，具体以产品/服务实际提供为准。除此之外，您理解并同意，我们希望提供给您的产品和服务是完善的，所以我们会不断改进我们的产品和服务，包括技术，这意味着我们可能会经常推出新的业务功能，可能需要收集新的个人信息或变更个人信息使用目的或方式。如果某一需要收集您的个人信息的功能或产品/服务未能在本隐私政策中予以说明的，我们会通过更新本政策、页面提示、弹窗、网站公告等方式另行向您说明该信息收集的目的、内容、使用方式和范围，并为您提供自主选择同意的方式，且在征得您明示同意后收集。在此过程中，如果您
      对相关事宜有任何疑惑的，可以通过本隐私政策第十条提供的方式联系我们，我们会尽快为您作出解答。
    </van-popup>

    <van-dialog color="#1989fa" confirmButtonText="取消" v-model="show2"  title="滑动到最大即可解锁">
      <!-- <div clastyle="width:100%;height:10%;background:skyblue"> -->
      <p class="p2">&nbsp;</p>

      <img
        style="width:100%"
        src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3529791325,258565410&fm=26&gp=0.jpg"
      />
      <p class="p2">&nbsp;</p>
      <van-slider
        style="width:80%;margin-left:10%;;"
        @change="onChange"
        v-model="value"
        :step="10"
      />
      <p class="p1">&nbsp;</p>
    </van-dialog>
  </div>
</template>
<script>
import Head from "@/components/Head.vue";
import { toast } from "vant";

import { Notify } from "vant";

export default {
  data() {
    return {
      active: 0,
      flag1: false,
      flag2: false,
      flag3: false,
      show: false,
      show1: false,
      show2: false,
      value: 0,
     
      img:  require(`@/assets/images/login.png`),
      login: {},
      register: {},
      mobile: "",
      title: [
        { txt: "登录", name: "" },
        { txt: "注册", name: "" },
        { txt: "手机验证", name: "" }
      ]
    };
  },
  mounted() {
    // var disabled=false
  },
  methods: {
    onChange(value) {
      this.$toast("当前值：" + value);
      if (this.value == 100) {
        this.$toast("当前是最大值,确认登录");

        this.$axios.post("/vue/login", this.login).then(res => {
          if (!!res.data.type) {
            console.log(res);
            sessionStorage.mobile = this.login.mobile;
            this.$router.push({ name: "mine" });

            sessionStorage.token = res.data.token;
          } else {
            sessionStorage.token = "";
          }
        });
      }
    },
    // 密码小眼睛
    change1() {
      this.flag1 = !this.flag1;
    },
    change2() {
      this.flag2 = !this.flag2;
    },
    change3() {
      this.flag3 = !this.flag3;
    },
    // 登录注册函数

    todoRegister() {
      if (!/^([a-zA-Z0-9_\u4e00-\u9fa5]{2,8})$/.test(this.register.username)) {
        Notify({ type: "danger", message: "用户名是2-8位的汉字、字母、数字" });
      } else {
        if (!/^[1]([3-9])[0-9]{9}$/.test(this.register.mobile)) {
          Notify({ type: "danger", message: "输入正确手机格式" });
        } else {
          if (
            !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(
              this.register.password
            )
          ) {
            Notify({
              type: "danger",
              message: "密码长度6-20的数字和字母，不可纯字母或纯数字"
            });
          } else {
            if (this.register.password !== this.register.dbpwd) {
              Notify({ type: "danger", message: "两次输出密码不一致" });
            } else {
              console.log(this);
              console.log(this.$axios);
              this.$axios.post("/vue/register", this.register).then(res => {
                if (!!res.data.type) {
                  this.active = 0;
                  this.login.mobile = res.data.result[0].mobile;
                }
              });
            }
          }
        }
      }
    },
    todoLogin() {
      if (!/^[1]([3-9])[0-9]{9}$/.test(this.login.mobile)) {
        Notify({ type: "danger", message: "手机格式不正确" });
      } else {
        if (
          !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(
            this.login.password
          )
        ) {
          Notify({
            type: "danger",
            message: "密码长度6-20的数字和字母,不可纯字母或纯数字"
          });
        } else {
          this.show2 = !this.show2;
          this.onChange();
       
        }
      }
    },
    QQ() {
      // 点击其他登录方式
      Notify({ type: "warning", background: "#fb7299", message: "暂不支持" });
    },
    regi() {
      this.active = 1;
    },
    log() {
      this.active = 0;
    },
    yonghu() {
      this.show = !false;
    },
    yinsi() {
      this.show1 = !false;

      this.$axios.post("/vue/register", this.login).then(res => {});
    }
  },

  components: {
    Head
  }
};
</script>
<style scoped>
.van-cell-group,
.van-hairline--top-bottom {
  margin-top: 0.2rem;
}
.van-button {
  width: 3rem !important;
  margin: 0.5rem 0 0.5rem 0.5rem;
  border-radius: 0.05rem;
}
#gaobtn {
  width: 1.5rem !important;
}
#gaobtn2 {
  width: 90% !important;
  margin-left: 5%;
}
#gaobtn3 {
  width: 100% !important;
  margin-right: 10%;
  /* margin-left: 10%; */
  right: 26% !important;
}
p {
  font-size: 12px;
  text-align: center;
}
.span {
  color: #fb7299;
}
.van-cell-group {
  background-color: #f5f5f5;
}
#icon {
  color: rgb(125, 126, 128);
  font-size: 26px;
  /* color: #fb7299; */
  margin: 0 0.4rem;
}
.van-cell--center {
  height: 1rem !important;
}
.van-field__body {
  height: 1rem !important;
}
.p1 {
  margin: 4% 0 !important;
}
.p2 {
  margin: 4% 0 8% 0 !important;
}
.van-dialog__confirm,
.van-button--large {
  display: none !important;
}
.van-button--large {
  width: 100%;
  height: 50px;
  line-height: 48px;
  display: none !important;
}
.van-dialog .van-button {
  display: none !important;
}
.van-dialog__header{
  color:#1989fa !important
}
</style>