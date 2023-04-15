<template>
  <div class="bg">
    <div class="dialog">
      <div class="top">登录</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "viewLogin",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss">
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
    width: 30%;
    height: 60vh;
    margin: 20vh auto;
    background-color: #fff;
    border-radius: 20px;
    .top {
      width: 90%;
      height: 60px;
      line-height: 60px;
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
      margin: auto;
    }
  }
}
</style>