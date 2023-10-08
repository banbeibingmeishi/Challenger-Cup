<template>
  <div class="tuijianbq">
    <Tuijianbqli :tjbq="tjbq1" :zjgx="zjgx1" :name="name1"></Tuijianbqli>
    <Tuijianbqli :tjbq="tjbq2" :zjgx="zjgx2" :name="name2"></Tuijianbqli>
    <Tuijianbqli :tjbq="tjbq3" :zjgx="zjgx3" :name="name3"></Tuijianbqli>
    <Tuijianbqli :tjbq="tjbq4" :zjgx="zjgx4" :name="name4"></Tuijianbqli>
    <div class="display">
      <img class="display1" src="~@/assets/display1.png" alt="">
      <img class="display2" src="~@/assets/display2.png" alt="">
      <div class="fuzhi">
        <svg t="1692760967333" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4066" width="18" height="18"><path d="M640 160 256 160C220.64 160 192 188.64 192 224L192 672 256 672 256 224 640 224 640 160 640 160ZM736 288 384 288C348.64 288 320 316.672 320 352L320 800C320 835.328 348.64 864 384 864L736 864C771.328 864 800 835.328 800 800L800 352C800 316.672 771.328 288 736 288L736 288ZM384 352 736 352 736 800 384 800 384 352Z" fill="#666666" p-id="4067"></path></svg>
        <div class="fuzhitext">山水画</div>
      </div>
    </div>
  </div>
</template>

<script>
import Tuijianbqli from './Tuijianbqli.vue'
export default {
name:'Tuijianbq',
data(){
  return{
    tjbq1:'临帖',
    zjgx1:'2 minutes ago',
    name1:'Bob John',
    tjbq2:'宋帖',
    zjgx2:'3 hours ago',
    name2:'Jack Simple',
    tjbq3:'明帖',
    zjgx3:'5 months ago',
    name3:'Niko Monesy',
    tjbq4:'清帖',
    zjgx4:'7 minutes ago',
    name4:'jks Kennys',
  }
},
components:{
  Tuijianbqli
}
}
</script>

<style  scoped>
.tuijianbq{
    width: 1362px;
    height: 540px;
    margin: auto;
    position: relative;
    top: -50px;
}

.display{
  width: 548px;
  height: 186px;
  flex-shrink: 0;
  border-radius: 0px 20px 20px 20px;
  background: #D9D9D9;
  position: relative;
  top: 24px;
  left: 124px;
}
.display img{
  width: 180px;
  height: 110px;
  flex-shrink: 0;
}
.display1{
  position: relative;
  top: 22px;
  left: 32px;
}
.display2{
  position: relative;
  top: 22px;
  left: 56px;
}
.fuzhi{
  width:100px;
  height: 15px;
  position: relative;
  top: 30px;
  left: 35px;
  color: #545454;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 1.75px;
  display: flex;
}
.fuzhi svg{
  position: relative;
  top: -3px;
}
.fuzhitext{
  margin-left: 5px;
}
</style>