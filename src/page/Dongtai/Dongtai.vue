<template>
   <div class="Dongtai">   
      <Header></Header>
      <PageOption></PageOption>
      <transition name="scale-transition">
      <Swiper :style="{ transform: 'scale(' + scale + ') translate(' + offsetX + 'px, ' + offsetY + 'px)' }"></Swiper>
      </transition>
      <Selflike v-if="showSelflike"></Selflike>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import PageOption from '../../components/PageOption.vue'
import Selflike from './Selflike.vue'
import Swiper from '../../components/Swiper.vue'
export default {
name:'Dongtai',
props:['showSelflike','offsetX','offsetY','scale'],
components:{
    Selflike,
    Swiper,
    Header,
    PageOption
}
}
</script>

<style>
.scale-transition-enter-active,
.scale-transition-leave-active {
  transition: transform 0.5s;
}
.scale-transition-enter,
.scale-transition-leave-to /* .scale-transition-leave-active in <2.1.8 */ {
  transform: scale(1); /* 初始状态和最终状态都是原始大小 */
}
</style>