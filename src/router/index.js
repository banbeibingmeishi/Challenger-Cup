//该文件用于创建整个应用的路由器
import VueRouter  from "vue-router";
import Dongtai from '../page/Dongtai/Dongtai.vue'
import Welcomepage from '../page/index/welcomepage.vue'
import Wode from '../page/Wode/Wode.vue'
import FenQu from '../page/Fenqu/FenQu.vue'
import Myshoucang from '../page/Wode/Myshoucang.vue'
import Myindex from '../page/Wode/Myindex.vue'
import Mygexinghua from '../page/Wode/Mygexinghua.vue'
import Mytougao from '../page/Wode/Mytougao.vue'
import Creatorcenter from '../page/Wode/Creatorcenter.vue'
import login from '../page/Login/login.vue'
//引入组件
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//创建一个路由器
export default new VueRouter({
    routes:
    [       {
                path:'/welcome',
                component:Welcomepage,
            },
            {   
            path:'/dongtai',
            component:Dongtai,
            },
            {
            path:'/fenqu',
            component:FenQu,
            },
            {
            path:'/wode',
                        component:Wode,
                        children:[
                            {
                                path:'myshoucang',
                                component:Myshoucang
                            },
                            {
                                path:'myindex',
                                component:Myindex
                            },
                            {
                                path:'mygexinghua',
                                component:Mygexinghua
                            },
                            {
                                path:'mytougao',
                                component:Mytougao,
                            },
                        ]
                        },
                        {
                            path:'/creatorcenter',
                            component:Creatorcenter
                        },
            {   
                path:'/login',
                component:login,
            },
    ]
})