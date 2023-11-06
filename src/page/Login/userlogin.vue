<template>
  <div class="userlogin">
    <div class="scansvg">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M11.25 6.75V11.25H6.75V6.75H11.25ZM13.5 4.5H4.5V13.5H13.5V4.5ZM11.25 18.75V23.25H6.75V18.75H11.25ZM13.5 16.5H4.5V25.5H13.5V16.5ZM23.25 6.75V11.25H18.75V6.75H23.25ZM25.5 4.5H16.5V13.5H25.5V4.5ZM16.5 16.5H18.75V18.75H16.5V16.5ZM18.75 18.75H21V21H18.75V18.75ZM21 16.5H23.25V18.75H21V16.5ZM16.5 21H18.75V23.25H16.5V21ZM18.75 23.25H21V25.5H18.75V23.25ZM21 21H23.25V23.25H21V21ZM23.25 18.75H25.5V21H23.25V18.75ZM23.25 23.25H25.5V25.5H23.25V23.25ZM30 7.5H27V3H22.5V0H30V7.5ZM30 30V22.5H27V27H22.5V30H30ZM0 30H7.5V27H3V22.5H0V30ZM0 0V7.5H3V3H7.5V0H0Z" fill="#545454"/>
        </svg>
    </div>
    <LoginWay></LoginWay>
    <router-view></router-view>
    <div class="forget">忘记密码</div>
    <router-link to="/register" class="register">免费注册</router-link>
    <div class="agree">
        <div class="check">
            <input type="checkbox">
        </div>
        <div class="agreetext">
            <div class="agreetext1">登陆即同意</div>
            <div class="agreetext2">《墨韵尘香古画平台服务协议》</div>
        </div>
    </div>
    <div class="moreway">
        <div class="moreline"></div>
        <div class="morewaytext">更多登录方式</div>
        <div class="moreline"></div>
    </div>
    <div class="moreicon">
        <div class="wechat">
           <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <g clip-path="url(#clip0_848_88)">
             <path d="M0 17.5C0 7.8349 7.8349 0 17.5 0C27.1651 0 35 7.8349 35 17.5C35 27.1651 27.1651 35 17.5 35C7.8349 35 0 27.1651 0 17.5Z" fill="#545454"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4023 14.07C22.2864 14.0634 22.1697 14.0627 22.0523 14.0627C17.8611 14.0627 14.4617 16.9101 14.4617 20.4247C14.4617 21 14.5558 21.5571 14.7264 22.0872C13.6495 22.1504 12.5696 22.0361 11.5297 21.7489L11.3883 21.708L8.37537 23.2422L9.18037 20.7207L9.10454 20.6719C7.11537 19.3988 5.8335 17.3928 5.8335 15.136C5.8335 11.2868 9.56391 8.16667 14.1664 8.16667C18.3351 8.16667 21.7891 10.726 22.4023 14.07ZM11.2665 13.8688C10.6205 13.8688 10.0962 13.3605 10.0962 12.7356C10.0962 12.1093 10.6205 11.6032 11.2665 11.6032C11.9133 11.6032 12.4383 12.1093 12.4383 12.7356C12.4383 13.3605 11.9133 13.8688 11.2665 13.8688ZM17.0663 11.6032C17.7123 11.6032 18.2359 12.1093 18.2359 12.7356C18.2359 13.3605 17.7123 13.8688 17.0663 13.8688C16.4195 13.8688 15.8967 13.3605 15.8967 12.7356C15.8967 12.1093 16.4195 11.6032 17.0663 11.6032Z" fill="#D0B5B0"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1158 26.3535C18.2271 26.3535 15.0742 23.7176 15.0742 20.4655C15.0742 17.2149 18.2271 14.579 22.1158 14.579C26.0022 14.579 29.1544 17.2149 29.1544 20.4655C29.1544 22.373 28.0702 24.0676 26.3909 25.1439L26.326 25.184L27.0063 27.3153L24.4622 26.0174C24.4622 26.0174 24.382 26.0422 24.3419 26.0524C23.617 26.2535 22.8681 26.3548 22.1158 26.3535ZM18.6763 18.4377C18.6763 17.9098 19.1196 17.481 19.6651 17.481C20.2119 17.481 20.6545 17.9098 20.6545 18.4377C20.6545 18.9671 20.2112 19.3966 19.6651 19.3966C19.1196 19.3966 18.6763 18.9671 18.6763 18.4377ZM23.5763 18.4377C23.5763 17.9098 24.0174 17.481 24.5636 17.481C25.1105 17.481 25.5523 17.9098 25.5523 18.4377C25.5523 18.9671 25.1105 19.3966 24.5636 19.3966C24.0182 19.3966 23.5763 18.9671 23.5763 18.4377Z" fill="#D0B5B0"/>
            </g>
            <defs>
            <clipPath id="clip0_848_88">
            <rect width="35" height="35" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </div>
        <div class="qq">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <g clip-path="url(#clip0_848_72)">
            <path d="M17.4998 0.699997C26.7783 0.699997 34.2998 8.2215 34.2998 17.5C34.2998 26.7785 26.7783 34.3 17.4998 34.3C8.22131 34.3 0.699806 26.7785 0.699806 17.5C0.699806 8.2215 8.22131 0.699997 17.4998 0.699997ZM10.4858 21.56C10.8078 21.728 11.3083 21.3465 11.7756 20.65C11.9593 21.4112 12.4213 22.099 13.0758 22.652C12.3863 22.904 11.9383 23.317 11.9383 23.7895C11.9383 24.563 13.1546 25.1877 14.6561 25.1877C16.0088 25.1877 17.1323 24.6785 17.3388 24.0117H17.6608C17.8708 24.6767 18.9908 25.1877 20.3436 25.1877C21.8433 25.1877 23.0596 24.563 23.0596 23.7877C23.0596 23.3187 22.6116 22.904 21.9221 22.6502C22.5783 22.099 23.0386 21.4112 23.2258 20.65C23.6931 21.3465 24.1936 21.728 24.5121 21.56C24.9758 21.322 24.8848 20.02 24.3073 18.6655C23.8523 17.598 23.2363 16.8105 22.7691 16.639C22.8174 16.1813 22.7115 15.7206 22.4681 15.33L22.4716 15.2582C22.4716 15.0657 22.4261 14.8907 22.3491 14.7367C22.2301 11.9612 20.4241 9.758 17.4998 9.758C14.5773 9.758 12.7696 11.9612 12.6506 14.7367C12.5736 14.8907 12.5281 15.0657 12.5281 15.2582C12.5281 15.2792 12.5281 15.3055 12.5333 15.33C12.2879 15.7198 12.1812 16.181 12.2306 16.639C11.7633 16.8105 11.1456 17.5962 10.6941 18.6655C10.1148 20.0217 10.0238 21.322 10.4858 21.5617V21.56Z" fill="#545454"/>
            </g>
            <defs>
            <clipPath id="clip0_848_72">
            <rect width="35" height="35" fill="white" transform="matrix(-1 0 0 1 35 0)"/>
            </clipPath>
            </defs>
            </svg>
        </div>
        <div class="facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M35 17.5C35 7.83501 27.165 0 17.5 0C7.83502 0 0 7.83501 0 17.5C0 26.2348 6.3995 33.4746 14.7656 34.7873V22.5586H10.3223V17.5H14.7656V13.6445C14.7656 9.25859 17.3783 6.83594 21.3756 6.83594C23.2903 6.83594 25.293 7.17773 25.293 7.17773V11.4844H23.0862C20.9123 11.4844 20.2344 12.8333 20.2344 14.2173V17.5H25.0879L24.312 22.5586H20.2344V34.7873C28.6005 33.4746 35 26.2348 35 17.5Z" fill="#545454"/>
            </svg>
        </div>
    </div>
  </div>
</template>

<script>
import LoginWay from './LoginWay.vue'
export default {
name:'UserLogin',
components:{
    LoginWay
}
}
</script>

<style>
.userlogin{
    width: 406px;
    height: 506px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.60);
    box-shadow: 0px 52px 48px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(46.397335052490234px);
    position: absolute;
    top: 211px;
    left: 829px;
    z-index: 999;
}
.scansvg{
    position: relative;
    top: 19px;
    left: 352px;
}
.idpassword{
    position: relative;
    top: 35px;
    left: 88px;
    width: 94px;
    height: 18px;
}
.optionline{
    margin: auto;
    width: 311px;
    height: 1px;
    background: #A7A4A4;
    position: relative;
    top: 47px;
}
.forget{
    position: relative;
    top: 100px;
    left: 116px;
    width: 87px;
    height: 15px;
    border-right: solid 1px #545454;
    color: #545454;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    cursor: pointer;
}
.register{
    position: relative;
    top: 80px;
    left: 245px;
    width: 87px;
    height: 15px;
    color: #545454;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    cursor: pointer;
}
.check{
    width: 270px;
    height: 12px;
    position: relative;
    top: 110px;
    left: 49px;
}
.check input{
    fill: #B40B0B;
}
.agreetext{
    display: flex;
    width: 257px;
    height: 12px;
    position: relative;
    top: 100px;
    left: 70px;
    color: #000;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.agreetext2{
    color: #B40B0B;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.moreway{
    position: relative;
    left: 35px;
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 120px;
    width: 340px;
    height: 15px;
}
.moreline{
    position: relative;
    top: 10px;
    width: 89px;
    height: 1px;
    background: #545454;
}
.morewaytext{
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.moreicon{
    position: relative;
    top: 150px;
    margin: auto;
    width: 200px;
    display: flex;
    justify-content: space-between;
}
</style>