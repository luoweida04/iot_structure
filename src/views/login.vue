<template>
  <div class="bg">
    <div class="dialog" v-if="isLogin">
      <div class="top">登录</div>
      <div class="cont">
        <el-form ref="form" :model="loginForm" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginForm.password" show-password></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span class="toRegister"
        >没有账号? <a @click="toRegister">点我注册</a></span
      >
    </div>
    <div class="dialog" v-if="!isLogin">
      <div class="top">注册</div>
      <div class="cont">
        <el-form ref="form" :model="registerForm" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="registerForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="registerForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input
              v-model="registerForm.rePassword"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="registerForm.checkCode"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="btns">
        <el-button type="info" @click="cancelRes">取消</el-button>
        <el-button type="primary" @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "viewLogin",
  components: {},
  data() {
    return {
      isLogin: true,
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        username: "",
        password: "",
        rePassword: "",
        checkCode: "",
      },
    };
  },
  methods: {
    toRegister() {
      this.isLogin = !this.isLogin;
    },
    register() {

    },
    cancelRes (){
      this.isLogin = !this.isLogin
    }
    // async name() {
    //   //async  await  是解决异步的一种方案，必须要加，但是原生封装就不用
    //   const { data: res } = await this.$http.get("/tabbar");
    //   this.data = res;
    // },
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
.el-input {
  width: 250px;
}
.el-form-item {
  width: 380px;
  margin: 30px auto;
  .el-form-item__label {
    width: 100px !important;
    font-size: 18px;
  }
}
.bg {
  width: 100vw;
  height: 100vh;
  background: -webkit-linear-gradient(
    top,
    rgb(20, 186, 241),
    rgb(232, 241, 244)
  );
  overflow: hidden;
  .dialog {
    position: relative;
    width: 580px;
    height: 550px;
    margin: 80px auto;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    padding-top: 10px;
    .top {
      width: 90%;
      height: 60px;
      line-height: 60px;
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
      margin: auto;
    }
    .cont {
      // position: relative;
    }
    .toRegister {
      position: absolute;
      bottom: 20px;
      transform: translateX(-50%);
      a {
        color: rgb(15, 158, 230);
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .btns {
      display: flex;
      justify-content: space-around;
      width: 80%;
      margin: auto;
      margin-top: 60px;
    }
  }
}
</style>