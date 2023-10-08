<template>
    <div class="tuijianbqli">
        <div class="tjbq">{{tjbq}}</div>
        <div class="hyd">
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="35" viewBox="0 0 49 35" fill="none">
  <path d="M0 12.7885H5V35H0V12.7885Z" fill="#EA6363"/>
  <path d="M11 6.05769H16V35H11V6.05769Z" fill="#EA6363"/>
  <path d="M22 0H27V35H22V0Z" fill="#EA6363"/>
  <path d="M33 8.07692H38V35H33V8.07692Z" fill="#EA6363"/>
  <path d="M44 10.7692H49V35H44V10.7692Z" fill="#EA6363"/>
</svg>
        </div>
        <div class="zjgx">{{zjgx}}</div>
        <div class="tjdr">
          <div class="touxiang"><img src="~@/assets/selfimg.png" alt=""></div>
          <div class="name">{{name}}</div>
        </div>
    </div>
</template>

<script>
export default {
name:'Tuijianbqli',
props:['tjbq','hyd','zjgx','name'],
data(){
    return{}
}
}
</script>

<style scoped>
.tuijianbqli{
    width: 1274px;
    height: 56px;
    margin: auto;
    display: flex;
}
.tjbq{
    width: 190px;
    text-align: center;
    color: #A7A4A4;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 2.8px;
}
.hyd{
height: 30px;
position: relative;
left: 242px;
top: 8px;
}
.zjgx{
position: relative;
left: 525px;
color: #545454;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 56px;
letter-spacing: 1.6px;
}
.tjdr{
  display: flex;
  position: absolute;
  left: 1180px;
  width: 176px;
  height: 56px;
}

.touxiang{
  width: 34px;
  height: 34px;
}
.touxiang img{
  position: relative;
  top: 10px;
  width: 34px;
  height: 34px;
  border-radius: 34px;
}
.name{
  margin-left:15px ;
  color: #545454;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: 0.8px;
}
</style>