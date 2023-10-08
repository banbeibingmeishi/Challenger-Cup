<template>
  <div class="favoritem">
    <div class="favoritemimg"></div>
    <div class="itemtext">收藏于：{{itemtext}}</div>
  </div>
</template>

<script>
export default {
name:'Favoritesitem',
props:['itemtext']
}
</script>

<style scoped>
.favoritem{
margin-top:20px ;
width: 204px;
height: 139px;
flex-shrink: 0;
}
.favoritemimg{
left: 246px;
top: 560px;
width: 204px;
height: 139px;
flex-shrink: 0;
opacity: 1;
border-radius: 8px;
background: url(https://img.js.design/assets/img/64c64dd23fca924926449574.png#2ba8d73d46537f67dce36e4382510ddf);
border: 2px solid #FFFFFF;
background-size: cover;
background-position: center;
}
.itemtext{
position: relative;
left: 10px;
top: 10px;
width: 130px;
height: 19px;
opacity: 1;
color: #000;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 1px;
}

</style>