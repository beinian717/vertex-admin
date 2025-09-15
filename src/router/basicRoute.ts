import { RouteRecordRaw } from "vue-router"



const routes:RouteRecordRaw[]=[
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/login/index.vue')
    },
    {
        path:'/',
        name:'Home',
        redirect:'/dashboard',
        component:()=>import('@/layout/DefaultLayout.vue'),
        children:[
            {
                path:'/dashboard',
                name:'Dashboard',
                component:()=>import('@/views/dashboard/index.vue')
            },
            {
                path:'/component',
                name:'Component',
                component:()=>import('@/views/component/index.vue')
            }
        ]
    }
]

export default routes