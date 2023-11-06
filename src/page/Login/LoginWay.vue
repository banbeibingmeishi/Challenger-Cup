<template>
  <div class="loginway">
<el-menu  mode="horizontal"
  background-color="transparent"
  active-background-color="transparent"
  text-color="#000000"
  active-text-color="#B40B0B"
  router
  default-active="/login/phone">
  <el-menu-item class="loginwaytext1" index="/login/phone">验证码登录</el-menu-item>
  <el-menu-item class="loginwaytext2" index="/login/password">账号密码登录</el-menu-item>
</el-menu>
    <div class="demarcationline"></div>
  </div>
</template>

<script>
export default {
name:'LoginWay',
mounted(){
}

}
</script>

<style>
.loginway{
    width: 311px;
    position: relative;
    left: 48px;
}
.loginwaytext1{
    width: 120px;
    height: 15px;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
}
.loginwaytext2{
    width: 140px;
    height: 15px;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
}
.el-menu-item:hover {
  background-color: transparent !important; 
}
.demarcationline{
    width: 311px;
    height: 1px;
    background: #A7A4A4;
    position: relative;
    top: -1px;
}
</style>