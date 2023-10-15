<template>
  <div class="login">
    <LoginHeader></LoginHeader>
    <Logincontent></Logincontent>
  </div>
</template>

<script>
import LoginHeader from './loginheader.vue'
import Logincontent from './logincontent.vue'
export default {
name:'login',
components:{
    LoginHeader,
    Logincontent
}
}
</script>

<style scoped>

</style>