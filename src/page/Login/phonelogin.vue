<template>
  <div class="phonelogin">
    <div class="phonenumber">
        <div class="phonesvg">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
            <path d="M5.65385 0H1.34615C0.603077 0 0 0.661818 0 1.47727V11.5227C0 12.3382 0.603077 13 1.34615 13H5.65385C6.39692 13 7 12.3382 7 11.5227V1.47727C7 0.661818 6.39692 0 5.65385 0ZM3.5 12.4091C3.05308 12.4091 2.69231 12.0132 2.69231 11.5227C2.69231 11.0323 3.05308 10.6364 3.5 10.6364C3.94692 10.6364 4.30769 11.0323 4.30769 11.5227C4.30769 12.0132 3.94692 12.4091 3.5 12.4091ZM5.92308 10.0455H1.07692V1.77273H5.92308V10.0455Z" fill="#545454"/>
            </svg>
        </div>
        <div class="phonetext">
            <input type="text" placeholder="请输入手机号">
        </div>
    </div>
    <div class="getnumber">
         <div class="getnumbersvg">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
            <path d="M4.5 9C5.11875 9 5.625 8.49375 5.625 7.875C5.625 7.25625 5.11875 6.75 4.5 6.75C3.88125 6.75 3.375 7.25625 3.375 7.875C3.375 8.49375 3.88125 9 4.5 9ZM7.875 3.9375H7.3125V2.8125C7.3125 1.26 6.0525 0 4.5 0C2.9475 0 1.6875 1.26 1.6875 2.8125V3.9375H1.125C0.50625 3.9375 0 4.44375 0 5.0625V10.6875C0 11.3062 0.50625 11.8125 1.125 11.8125H7.875C8.49375 11.8125 9 11.3062 9 10.6875V5.0625C9 4.44375 8.49375 3.9375 7.875 3.9375ZM2.75625 2.8125C2.75625 1.85063 3.53813 1.06875 4.5 1.06875C5.46187 1.06875 6.24375 1.85063 6.24375 2.8125V3.9375H2.75625V2.8125ZM7.875 10.6875H1.125V5.0625H7.875V10.6875Z" fill="#545454"/>
            </svg>
        </div>
        <div class="getnumbertext">
            <input type="text" placeholder="请输入短信验证码">
        </div>
        <div class="getnumberbutton">获取短信验证码</div>
    </div>
  </div>
</template>

<script>
export default {
name:'Phonelogin'
}
</script>

<style scoped>
.phonelogin{
    width: 310px;
    height: 88px;
    margin: auto;
    position: relative;
    top: 78px;
}
.phonenumber{
    width: 310px;
    height: 36px;
    border-radius: 5px;
    border: 1px solid #545454;
    display: flex;
}
.phonesvg{
    position: relative;
    top: 6px;
    left: 11px;
    width: 7px;
    height: 13px;
    flex-shrink: 0;
}
.phonetext{
    width: 109px;
    height: 16px;
    position: relative;
    top: 5px;
    left: 20px;
}
.phonetext input{
    color: #545454;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    border: 0;
    outline: none;
}
.getnumber{
    margin-top:16px;
    width: 310px;
    height: 36px;
    border-radius: 5px;
    border: 1px solid #545454;
    display: flex;
}
.getnumbersvg{
    position: relative;
    top: 6px;
    left: 11px;
    width: 7px;
    height: 13px;
    flex-shrink: 0;
}
.getnumbertext{
    width: 109px;
    height: 16px;
    position: relative;
    top: 5px;
    left: 20px;
}
.getnumber input{
    color: #545454;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    border: 0;
    outline: none;
}
.getnumberbutton{
    border-left: solid 1px #545454;
    position: relative;
    left: 73px;
    width: 120px;
    height: 36px;
    color: #B40B0B;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
}
</style>