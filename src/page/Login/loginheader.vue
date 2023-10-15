<template>
  <div class="loginHeader">
      <div class="logo"></div>
      <div class="community">墨韵尘香古画社区</div>
      <div class="about">
        <div class="about-chinese">关于</div>
        <div class="about-english">about</div>
      </div>
      <div class="setting">
        <div class="setting-chinese">设置</div>
        <div class="setting-english">system settings</div>
      </div>
  </div>
</template>

<script>
export default {
name:'LoginHeader'
}
</script>

<style scoped>
.loginHeader{
  width: 1440px;
    height: 81px;
    background: #FFF;
    box-shadow: 6px 0px 10px 0px rgba(0, 0, 0, 0.25);
    display: flex;
}
.logo{
  position: absolute;
  top: 17px;
  left: 57px;
  width: 42px;
  height: 44px;
  flex-shrink: 0;
  background:url('~@/assets/logo.png') #FFF 50% / cover no-repeat;
}
.community{
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 7px;
    position: absolute;
    top: 28px;
    left: 124px;
}
.about{
    width: 110px;
    height: 24px;
    position: absolute;
    top: 32px;
    left: 871px;
    display: flex;
    justify-content: space-around;
}
.setting{
    width: 207px;
    height: 24px;
    position: absolute;
    top: 32px;
    left: 1057px;
    display: flex;
    justify-content: space-around;
}
.about , .setting{
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}
.about-chinese{
  width: 40px;
  height: 24px;
}
.about-english{
  width: 55px;
  height: 24px;
}
.setting-chinese{
  width: 40px;
  height: 24px;
}
.setting-english{
  width: 150px;
  height: 24px;
}
</style>