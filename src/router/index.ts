import { createRouter ,createWebHashHistory} from "vue-router";
import { appRoutes } from "./routes";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 进度条库  不同时显示旋转的加载指示器（圆圈动画）
NProgress.configure({showSpinner:false})

console.log(appRoutes)
const router =createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'login'
        },
        {
            path:'/login',
            component:()=>import('@/views/login/index.vue')
        },
        {
            path:'/dashboard',
            component:()=>import('@/views/dashboard/index.vue')
        },
        // 页面级路由
        ...appRoutes
    ]
})
export default router;