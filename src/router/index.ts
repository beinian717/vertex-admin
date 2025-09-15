import {createRouter,createWebHashHistory} from 'vue-router'
import routes from './basicRoute'

const router=createRouter({
    history:createWebHashHistory(),
    routes
})


export default router
