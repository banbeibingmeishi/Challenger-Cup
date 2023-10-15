<template>
  <el-carousel :interval="4000" type="card" height="460px">
    <el-carousel-item v-for="item in imgs" :key="item">
      <h3 class="medium"><img :src="`${$store.state.url}/swiper/img/${item}`" alt=""></h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import {Carousel,carouselItem} from 'element-ui'
import axios from 'axios'
export default {
name:'Swiper',
data(){
  return{
 imgs: [], 
  }

},
created(){
  axios.get(`${this.$store.state.url}/swiper`).then(res=>{
    this.imgs = res.data
  }).catch(err=>{
    console.log(err);
  })
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