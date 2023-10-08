<template>
  <el-carousel :interval="4000" type="card" height="460px">
    <el-carousel-item v-for="item in imgs" :key="item">
      <h3 class="medium"><img :src="require(`@/assets/${item}.png`)" alt=""></h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import {Carousel,carouselItem} from 'element-ui'
export default {
name:'Swiper',
data(){
  return{
 imgs: ['1', '2', '3', '4', '5'], 
  }
},
components:{
  Carousel,
  carouselItem
}
}
</script>
<style>
  img{
	    width: 707px;
	    height: 459px;
		  border-radius: 10px;
	}
</style>