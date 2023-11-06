<template>
<div class="logincontent">
    <Loginbacg></Loginbacg>
    <LoginWelcome></LoginWelcome>
    <Userlogin></Userlogin>
</div>
</template>

<script>
import Loginbacg from './loginbacg.vue'
import LoginWelcome from './loginWelcome.vue'
import Userlogin from './userlogin.vue'
export default {
name:'LoginContent',
components:{
    Loginbacg,
    LoginWelcome,
    Userlogin
}
}
</script>

<style scoped>
.logincontent{
    width: 1440px;
    height: 937px;
}
</style>