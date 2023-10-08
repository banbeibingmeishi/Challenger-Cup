<template>
  <div id="app">
    <Header></Header>
    <Search ></Search>
    <Welcome v-if="showWelcome"></Welcome>
    <PageOption v-if="showPageOption" @index-clicked="handleIndexClicked"></PageOption>
    <FenQu v-if="pageindex === 1"></FenQu>
    <Dongtai v-if="pageindex === 2" :scale='scale' :showSelflike='showSelflike' :offsetX="offsetX" :offsetY="offsetY"></Dongtai>
    <Wode v-if="pageindex === 3"></Wode>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Welcome from './page/index/Welcome.vue'
import Dongtai from './page/Dongtai/Dongtai.vue'
import PageOption from './page/index/PageOption.vue'
import FenQu from './page/Fenqu/FenQu.vue'
import Wode from './page/Wode/Wode.vue'
export default {
  name: 'App',
  components: {
     Header,
     Search,
     Welcome,
     Dongtai,
     PageOption,
     FenQu,
     Wode,
  },
  data() {
    return {
      showSelflike: false,
      showWelcome: true,
      showPageOption:false,
      targetScrollPosition: 156, 
      scale:1,
      offsetX: 0,
      offsetY: 0,
      pageindex:2
    };
  },
   mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
   beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
   methods: {
    handleIndexClicked(clickedIndex) {
      console.log(clickedIndex)
      this.pageindex = clickedIndex

    },
    handleScroll() {
      const currentScrollPosition = window.scrollY || window.pageYOffset;
      if (currentScrollPosition > this.targetScrollPosition) {
        this.showSelflike = true;
        this.showWelcome = false;
        this.showPageOption = true;
        const targetScale = 0.7;
        const targetOffsetX = 0; 
        const targetOffsetY = 70; 
        const duration = 500; 
        let startTime = null;
        const startScale = this.scale;
        const startOffsetX = this.offsetX;
        const startOffsetY = this.offsetY;
        this.scrollToTop()
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          this.scale = startScale - (startScale - targetScale) * (progress / duration);
          this.offsetX = startOffsetX - (startOffsetX - targetOffsetX) * (progress / duration);
          this.offsetY = startOffsetY - (startOffsetY - targetOffsetY) * (progress / duration);

          if (progress < duration) {
            window.requestAnimationFrame(animate);
          } else {
            this.scale = targetScale; 
            this.offsetX = targetOffsetX; 
            this.offsetY = targetOffsetY; 
          }
        };

        window.requestAnimationFrame(animate);
        window.removeEventListener('scroll', this.handleScroll);
      }
    },
     scrollToTop() {
      window.scrollTo({
        top: 0,
      });
    }
  },
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
}
#app{
  width: 1440px;
  height: 1024px;
  background: #FFF;
}
</style>
