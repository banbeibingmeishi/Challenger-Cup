<template>
  <div class="wode">
    <Header></Header>
    <PageOption></PageOption>
        <div class="backg"><img src="~@/assets/backg.png" alt="">
          <div class="user">
            <div class="userimg"><img src="~@/assets/selfimg.png" alt=""></div>
            <div class="username">{{username}}</div>
            <div class="usertext">{{gexingtext}}</div>
          </div>
        </div>
        <Wodeoption></Wodeoption>
        <router-view></router-view>
        <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import PageOption from '../../components/PageOption.vue'
import Wodeoption from './Wodeoption.vue'
import Creatorcenter from './Creatorcenter.vue'
import Footer from '../../components/Footer.vue'
export default {
name:'Wode',
data(){
  return{
    username:'用户名',
    gexingtext:"认证，个性签名"
  }
},
components:{
  Wodeoption,
  Footer,
  Creatorcenter,
  Header,
  PageOption
},
methods:{
}
}
</script>

<style scoped>
.backg{
    position: relative;
    top: -26px;
    width: 1440px;
    height: 222px;
}
.backg img{
  width: 1440px;
  height: 222px;
  border-radius: 0px;
}
.wode{
  width: 1440px;
  height: 1024px;
}
.user{
  position: relative;
  top: -130px;
  left: 46px;
  width: 232px;
  height: 94px;
  flex-shrink: 0;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.80);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.userimg{
  position: relative;
  top: 16px;
  left: 19px;
  width: 61px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 61px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.userimg img{
  width: 61px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 61px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.username{
  position: relative;
  top: -40px;
  left: 100px;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.usertext{
  color: #000;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: relative;
  top: -30px;
  left: 100px;
}

</style>