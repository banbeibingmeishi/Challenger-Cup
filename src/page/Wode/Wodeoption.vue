<template>
  <div class="wodeoption">
    <ul class="nav">
    <li :class="{active:index==isActive}" @click="indexClickoption(index)"  v-for="(option,index) in options" :key='index'><div>{{option}}</div></li>
    </ul>
  </div>
</template>

<script>
export default {
name:'Wodeoption',
data(){
  return{
    options:['主页','投稿','收藏','个性化'],
    isActive: 2,
    wodepage:3,
  }
},
props:['getpage'],
methods:{
 indexClickoption(index){
  this.isActive = index
  this.wodepage = index + 1
  this.getpage(this.wodepage)
  },
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
}
.nav li div{
margin: auto;
width: 60px;
height: 70px;
font-weight: 500;
letter-spacing: 0px;
line-height: 34px;
text-align: center;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 700;
}
.active{
  color: #B40B0B;
}
</style>