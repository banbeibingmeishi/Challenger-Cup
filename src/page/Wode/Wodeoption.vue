<template>
  <div  class="wodeoption">
    <ul class="nav">
    <li><router-link class="link" to='/wode/myindex' active-class='active'>主页</router-link></li>
    <li><router-link class="link" to='/wode/mytougao' active-class='active'>投稿</router-link></li>
    <li><router-link class="link" to='/wode/myshoucang' active-class='active'>收藏</router-link></li>
    <li><router-link class="link" to='/wode/mygexinghua' active-class='active'>个性化</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
name:'Wodeoption',
data(){
  return{
  }
},
methods:{
},
mounted(){
  this.$router.push('/wode/myshoucang')
}
}
</script>
<style scoped>
.wodeoption{
  position: relative;
  left: 446px;
  width: 1112px;
  height: 70px;
  background: rgba(255, 255, 255, 0.5);
}
.nav{
  width: 800px;
  height: 70px;
  list-style: none;
}
.nav li{
  width: 150px;
  height: 34px;
  margin-top: 10px;
  float: left;
  border-right: 1px solid  #B40B0B;
  text-align: center;
}
a{
  text-decoration: none;
  
}
.link{
  line-height: 34px;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  color: #545454;
}
.active{
  color: #B40B0B;
}

</style>