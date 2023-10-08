<template>
<div class="FenQu">
   <div class="backg">
    <img src="~@/assets/backg.png" alt="">
    <div class="fenquoption">
      <div class="optext bl">故事</div>
      <div  class="optext bl">赋诗</div>
      <div  class="optext bl">技法</div>
      <div  class="optext bl">随笔</div>
      <div  class="optext bl">原创</div>
      <div  class="optext ">共创</div>
    </div>
   </div>
   <div class="storyoption">
    <div class="tuijianbiaoqian">推荐标签</div>
    <div class="huoyuedu">活跃度</div>
    <div class="zuijingnegxin">最近更新</div>
    <div class="tuijiandaren">推荐达人</div>
   </div>
  <Tuijianbq></Tuijianbq>
  <Footer></Footer>
</div>
</template>

<script>
import Tuijianbq from './Tuijianbq.vue'
import Footer from '../../components/Footer.vue'
export default {
name:'FenQu',
components:{
  Tuijianbq,
  Footer
}
}
</script>

<style  scoped>
.FenQu{
    width: 1440px;
}
.backg{
    position: relative;
    top: -26px;
    width: 1440px;
    height: 222px;
}
.backg img{
  width: 1440px;
  height: 222px;
  border-radius: 0px;
}
.bl{
  border-right:solid 2px red;
}
.fenquoption{
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -75px;
  width: 1440px;
  height: 40px;
  color: #545454;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 2.8px;
}
.optext{
  width: 16.67%;
  text-align: center;
}
.storyoption{
  width: 1440px;
  height: 109px;
  display: flex;
  position: relative;
  top: -30px;
}
.storyoption div{
  width: 25%;
  height: 109px;
  color: #A7A4A4;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 109px;
  letter-spacing: 2.8px;
  text-align: center;
}
</style>