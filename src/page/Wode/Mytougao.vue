<template>
  <div class="mytougao">
    <router-link  to='/creatorcenter' class="gotocreator" >
        进入创作者中心
    </router-link>
  </div>
</template>

<script>
export default {
name:'Mytougao',
data(){
    return{
    }
},
components:{
},
methods:{
}
}
</script>
<style>
.gotocreator{
width: 172px;
height: 45px;
flex-shrink: 0;
border-radius: 3px;
background: #B40B0B;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
position: absolute;
top: 333px;
left: 80px;
color: #FFF;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 45px;
text-align: center;
}
a{
  text-decoration: none;
}
</style>