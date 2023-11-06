<template>
  <div class="loginbacg">
    <el-carousel height="937px" arrow="never" class="bacgswiper">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src=item.imgersssd alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
name:'LoginBacg',
data(){
  return{
    imgs:[
          {imgersssd:require("../../assets/4.png")},
          {imgersssd:require("../../assets/5.png")},
          {imgersssd:require("../../assets/6.png")},
          {imgersssd:require("../../assets/7.png")},
        ]
    }
  },
  methods(){
    console.log()
  }
}
</script>

<style scoped>
.loginbacg , .loginbacg img{
    width: 1440px;
    height: 937px;
    border-radius: 0px;
}
.bacgswiper{
  width: 1440px;
  height: 937px;
}
</style>