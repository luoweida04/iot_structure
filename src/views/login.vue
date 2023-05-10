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
      <el-button type="primary" @click="login">登录</el-button>
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
          <el-form-item label="验证码" class="checkCodeBox">
            <el-input
              v-model="registerForm.checkCode"
              class="checkCode"
            ></el-input>
            <img
              :src="checkCodeImageBase64"
              alt="验证码"
              @click="getCheckCodeImage"
              style="cursor: pointer"
            />
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
import axios from "axios";
import { Message } from "element-ui";
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
      checkCodeImageBase64: "",
    };
  },
  methods: {
    toRegister() {
      this.isLogin = !this.isLogin;
    },
    cancelRes() {
      this.isLogin = !this.isLogin;
    },
    login() {
      axios({
        method: "get",
        url: "http://localhost:8080/api/user/login", // login是代理，在vue.config.js中
        params: {
          username: this.loginForm.username,
          password: this.loginForm.password,
        },
      }).then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    register() {
      axios({
        method: "post",
        url: "http://localhost:8080/api/user/register",
        params: {
          username: this.registerForm.username,
          password: this.registerForm.password,
          rePassword: this.registerForm.rePassword,
          checkCode: this.registerForm.checkCode,
        },
      }).then(
        (response) => {
          console.log("register success", response.data);
          if (response.data.flag == true) {
            Message({
              message: "注册成功, 3秒后跳转到登录页",
              type: "success",
            });
            setTimeout(() => {
              this.isLogin = true;
            }, 3000);
          } else {
            Message({
              message: response.data.msg,
              type: "error",
            });
          }
        },
        (error) => {
          console.log("register fail", error.message);
          Message({
            message: "注册失败",
            type: "error",
          });
        }
      );
    },
    getCheckCodeImage() {
      const nowtime = Date.now();
      axios({
        method: "get",
        url: `http://localhost:8080/api/code?${nowtime}`,
      }).then(
        (response) => {
          console.log("checkCode success", response.data);
          this.checkCodeImageBase64 = `data:image/png;base64,${response.data.data}`;
        },
        (error) => {
          console.log("checkCode fail", error.message);
        }
      );
    },
  },
  mounted() {
    this.getCheckCodeImage();
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
      .checkCodeBox {
        display: flex;
        flex-direction: row;
        .el-form-item__content {
          display: flex;
          text-align: left;
          margin-left: 20px !important;
        }
        .checkCode {
          width: 100px;
          margin-left: 0;
          margin-right: 20px;
        }
      }
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