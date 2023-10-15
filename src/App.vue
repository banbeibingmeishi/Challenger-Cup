<template>
  <div id="app">
    <router-view :scale='scale' :showSelflike='showSelflike' :offsetX="offsetX" :offsetY="offsetY"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      showSelflike: false,
      showPageOption:false,
      showWelcome: true,
      showSwiper:true,
      targetScrollPosition: 156, 
      scale:1,
      offsetX: 0,
      offsetY: 0,
    };
  },
   mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.$router.push('/welcome'); //在mounted时直接强制跳转至/welcome
  },
   beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
   methods: {
    //处理滑动至页面底部后跳转至动态页面
    handleScroll() {
      const currentScrollPosition = window.scrollY || window.pageYOffset;
      if (currentScrollPosition > this.targetScrollPosition) {
        this.showSelflike = true;
        this.showWelcome = false;
        this.showSwiper = false;
        this.showPageOption = true;
        this.$router.push('/dongtai') 
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
