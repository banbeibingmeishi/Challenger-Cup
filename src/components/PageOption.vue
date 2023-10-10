<template>
  <div class="pageOption">
    <router-link to='/fenqu' class="fenqu" active-class="active">分区
      <div class="bottombar">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="6" viewBox="0 0 30 6" fill="none">
          <path  stroke-width="5" stroke-linecap="round" d="M3 3L27 3"/>
        </svg>
      </div>
    </router-link>
    <router-link to="/dongtai" class="dongtai" active-class="active" >动态
      <div class="bottombar">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="6" viewBox="0 0 30 6" fill="none">
          <path   stroke-width="5" stroke-linecap="round" d="M3 3L27 3"/>
        </svg>
      </div>
    </router-link>
    <router-link to="/wode" class="wode" active-class="active">我的
      <div class="bottombar">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="6" viewBox="0 0 30 6" fill=" none">
          <path  stroke-width="5" stroke-linecap="round" d="M3 3L27 3"/>
        </svg>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'PageOption',
  data() {
    return{}
  },
};
</script>
<style scoped>
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
.fenqu, .dongtai,.wode {
  width: 40px;
  height: 27px;
  cursor: pointer; /* 添加光标指针以指示它们是可单击的 */
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
.fenqu.active, .dongtai.active, .wode.active {
  color: #B40B0B;
}
.active .bottombar{
  stroke: #B40B0B;
}
a{
  text-decoration: none;
}

</style>
