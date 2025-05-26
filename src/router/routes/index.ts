import type { RouteRecordNormalized } from "vue-router";

// 在构建时自动加载路由组件，减少手动导入的麻烦
const modules =import.meta.glob('./modules/*.ts',{eager:true}) //eager：在应用启动时立即被导入，而不使用懒加载

function formateModule(_modules:any,result:RouteRecordNormalized[]){
    Object.keys(_modules).forEach(key=>{
        const defaultModule=_modules[key].default
        // const moduleList=Array.isArray(defaultModule)?[...defaultModule]:[defaultModule]
        // result.push(...moduleList)
        console.log(defaultModule)
        result.push(defaultModule)
    })

    return result
}

export const appRoutes:RouteRecordNormalized[]=formateModule(modules,[])