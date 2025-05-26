import {defineComponent} from 'vue'
export type Component<T = any>
 = ReturnType<typeof defineComponent> | (() => Promise<typeof import('*.vue')>) | (() => Promise<T>)

export interface AppRouteRecordRaw{
    path:string,
    name?:string | symbol,
    component:Component | string
    children:AppRouteRecordRaw[]
}