import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 通过提前加载 mock 模块，确保所有的 API 请求在发送前都能被 MockJS 拦截处理。
import './mock'
// import '@icons/system/iconfont.css'
// import '@icons/system/iconfont.js'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
