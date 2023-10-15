<template>
  <div class="welcomepage">
    <Header></Header>
    <Welcome></Welcome>
    <Swiper></Swiper>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Swiper from '../../components/Swiper.vue'
import Welcome from './Welcome.vue'
export default {
name:"Welcomepage",
components:{
    Header,
    Swiper,
    Welcome
},
}
</script>

<style>

</style>