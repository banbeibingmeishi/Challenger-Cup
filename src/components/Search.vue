<template>
   <div ref="search" class="search">
        <div @click="Zhankai" ref="icon" class="icon"></div>
        <div ref="input" class="input">
            <input type="text" placeholder="请输入作品名称，艺术家名称，或者是相关作品信息" id="mysearch">
        </div>
        <span ref="clear" class="clear" onclick="document.getElementById('mysearch').value = ''"></span>
    </div>
</template>

<script>
export default {
name:'Search',
methods:{
    Zhankai(){
        this.$refs.search.classList.toggle('active')
        this.$refs.icon.classList.toggle('active')
    }
}
}
</script>

<style>
.search{
    position: absolute;
    top: 19px;
    left: 174px;
    width: 42px;
    height: 42px;
    border-radius: 42px;
    transition: 0.5s;
    overflow: hidden;
    border-radius: 24px;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
}
.search.active{
    width: 450px;
}

.search .icon{
    position: absolute;
    width: 42px;
    height: 42px;
    background-color: #fff;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    cursor: pointer;
    transition: transform 0.8s ease;
}
.search .icon::before{
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid #545454;
    border-radius: 50%;
    transform: translate(-2px,-2px);
}
.search .icon::after{
    content: '';
    position: absolute;
    width: 3px;
    height: 8px;
    background: #545454;
    transform: translate(8px,8px) rotate(315deg);
}
.search .icon.active {
    transform: rotateY(180deg);
    transition: transform 0.5s ease;
}

.search .input{
    position: relative;
    width: 300px;
    height: 60px;
    left: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.search .input input{
    position: absolute;
    top: -9px;
    left: -10px;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 12px;
    /* padding: 8px -10px; */
}
.clear{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    right: 15px;
    background: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.clear::before{
    position: absolute;
    content: '';
    width: 1px;
    height: 15px;
    background: #999;
    transform: rotate(45deg);
}
.clear::after{
    position: absolute;
    content: '';
    width: 1px;
    height: 15px;
    background: #999;
    transform: rotate(315deg);
}
</style>