<template>
  <div class="phonelogin">
        <el-form :model="user">
            <el-form-item  class="phonenumber" prop="userphone">
                <el-input prefix-icon="el-icon-mobile" class="phonetext"  type="text" placeholder="请输入手机号" v-model="user.userphone"></el-input>
            </el-form-item>
            <div class="getnumbercontent">
                <el-form-item class="getnumber" prop="validcode">
                    <el-input prefix-icon="el-icon-lock" type="text" placeholder="请输入短信验证码" v-model="user.validcode"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="getnumberbutton">获取短信验证码</el-button>
                </el-form-item>
            </div>
                <el-form-item >
                    <el-button @click="login()" class="loginbutton">登录</el-button>
                </el-form-item>
    </el-form>   
  </div>
</template>

<script>
export default {
name:'PhoneLogin',
data(){
    return{
        user:{
            validcode:'',
            userphone:'',
        }
    }
},
methods:{
    login(){
        
    }
}
}
</script>

<style  lang="scss" scoped>
.phonelogin{
    width: 310px;
    height: 88px;
    margin: auto;
    position: relative;
    top: 20px;
    margin-bottom:10px;
}
/deep/ .el-input__inner{
  border: solid 1px #545454; 
  background-color: rgba(255, 255, 255, 0);
  color: #545454;
}
/deep/.el-input__inner::placeholder {
    color: #545454;
}

.phonenumber{
    width: 310px;
    height: 36px;
    flex-shrink: 0;
}
.phonetext{
    color: #545454;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
}
.getnumbercontent{
    display: flex;
}
.getnumber{
    width: 192px;
    height: 16px;
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
    height: 40px;
    border: solid 1px #545454;
    border-radius: 5px;
    border-left: solid 1px #545454;
    color: #B40B0B;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    background-color: transparent;
}
.loginbutton{
    margin: auto;
    width: 311px;
    height: 36px;
    border-radius: 5px;
    background: #B40B0B;
    color: #FFF;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    line-height: 10px;
}
</style>