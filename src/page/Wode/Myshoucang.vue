<template>
    <div class="myshoucang">
    <div class="sctop">
      <img :src="sctopimg" alt="">
      <div class="scjname">{{scjname}}</div>
      <div class="creator">{{creator}}</div>
      <div class="createtime">{{createtime}}</div>
      <div class="alldisplay">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
  <path d="M1 1.80385L10 7L1 12.1962L1 1.80385Z" stroke="white"/>
        </svg>
        全部展览
      </div>
    </div>
    <div class="fenge"></div>
    <div class="scbottom">
      <div class="scbottomtop">
      <Scitem v-for="(itemtext , index) in itemtexts" :key="index" :itemtext='itemtext'></Scitem>
      </div>
    <div class="scbottombottom">
      <Scitem v-for="(itemtext , index) in itemtexts" :key="index" :itemtext='itemtext'></Scitem>
    </div>
    </div>
  </div>
</template>

<script>
import Scitem from './Scitem.vue'
export default {
name:'Myshoucang',
data(){
  return{
    sctopimg:require('@/assets/sctop.png'),
    scjname:'默认收藏夹',
    creator:'创建者：Esther Howard',
    createtime:'创建时间：October 24, 2018',
    itemtexts:['2023年9月','2021年8月','2019年3月','2017年10月','2018年3月'],
    itemtexts2:['2023年9月','2021年8月','2019年3月','2017年10月','2018年3月']
  }
},
components:{
    Scitem
}
}
</script>

<style>
.myshoucang{
  width: 1362px;
  height: 540px;
  margin: auto;
  background: #F6F6F6;
}
.sctop{
  width: 1362px;
  height: 210px;
}
.sctop img{
  width: 204px;
  height: 139px;
  flex-shrink: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  top: 38px;
  left: 45px;
}
.scjname{
  position: relative;
  top: -100px;
  left: 280px;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.creator{
  color: #545454;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
position: relative;
left: 280px;
top: -80px;
}
.createtime{
  color: #000;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
position: relative;
top: -100px;
left: 470px;
}
.alldisplay{
width: 114px;
height: 38px;
flex-shrink: 0;
border-radius: 5px;
background: #B40B0B;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
position: relative;
top: -80px;
left: 280px;
color: #FFF;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 38px;
text-align: center;
}
.alldisplay svg{
  position: relative;
  top: 2px;
  left: -1px;
}
.fenge{
width: 1292.014px;
height: 1px;
background: #B40B0B;
margin: auto;
}
.scbottom{
  width: 1258px;
  height: 264px;
  margin: auto;
  overflow: hidden;
}
.scbottomtop{
  display: flex;
  justify-content: space-between;
}
.scbottombottom{
  margin-top:30px ;
  display: flex;
  justify-content: space-between;
}
</style>