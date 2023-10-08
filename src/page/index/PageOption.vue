<template>
  <div class="pageOption">
    <div class="fenqu" @click="Changecolor(1)">
      <div class="fenqutext">分区</div>
      <div class="bottombar">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="6" viewBox="0 0 30 6" fill="none">
          <path :stroke="index === 1 ? '#B40B0B' : '#A7A4A4'" stroke-width="5" stroke-linecap="round" d="M3 3L27 3"/>
        </svg>
      </div>
    </div>
    <div class="dongtai" @click="Changecolor(2)">
      <div class="dongtaitext">动态</div>
      <div class="bottombar">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="6" viewBox="0 0 30 6" fill="none">
          <path :stroke="index === 2 ? '#B40B0B' : '#A7A4A4'" stroke-width="5" stroke-linecap="round" d="M3 3L27 3"/>
        </svg>
      </div>
    </div>
    <div class="wode" @click="Changecolor(3)">
      <div class="wodetext">我的</div>
      <div class="bottombar">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="6" viewBox="0 0 30 6" fill=" none">
          <path :stroke="index === 3 ? '#B40B0B' : '#A7A4A4'" stroke-width="5" stroke-linecap="round" d="M3 3L27 3"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageOption',
  data() {
    return {
      index: 2
    };
  },
  methods: {
    Changecolor(clickedIndex) {
      this.index = clickedIndex;
      this.$emit('index-clicked', clickedIndex);
    }
  }
};
</script>



<style>
.pageOption {
  position: relative;
  top: 40px;
  width: 296px;
  height: 27px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  z-index: 1;
}
.fenqu, .dongtai, .wode {
  width: 40px;
  height: 27px;
  cursor: pointer; /* 添加光标指针以指示它们是可单击的 */
}
.fenqu.active, .dongtai.active, .wode.active {
  background-color: #B40B0B; /* 设置你希望的选中颜色 */
}
.fenqutext, .dongtaitext, .wodetext {
  color: #A7A4A4;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.bottombar {
  position: relative;
  top: -10px;
  left: 5px;
  width: 24px;
  height: 0px;
  stroke-width: 5px;
  stroke: #A7A4A4;
}
</style>
