<template>
  <div class="footer">
    <div>联系我们</div>
    <div class="bar"></div>
    <div>官方地址</div>
    <div class="bar"></div>
    <div>侵权投诉</div>
    <div class="bar"></div>
    <div>移动客户端</div>
  </div>
</template>

<script>
export default {
name:'Footer'
}
</script>

<style  scoped>
.footer{
    width: 270px;
    height: 13px;
    margin: auto;
    display: flex;
    color: #828080;
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: 13px;
    letter-spacing: 1.1px;
    justify-content: space-around;
}
.bar{
    width: 1px;
    height: 13px;
    background: #D8D8D8;
}
</style>