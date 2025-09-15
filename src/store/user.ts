import { defineStore } from "pinia";
import { loginApi } from "@/api/user";

interface LoginData {
    username: string,
    password: string
}
const useUserStore = defineStore('user', {
    state: () => ({
        token: sessionStorage.getItem('token') || '',
        username: sessionStorage.getItem('username') || "",
        roles: sessionStorage.getItem('roles') ? JSON.parse(sessionStorage.getItem('roles')!) : [],
        menu: sessionStorage.getItem('menu') ? JSON.parse(sessionStorage.getItem('menu') || "") : [],
    }),
    actions: {
        async login(loginForm: LoginData) {
            // await只能等待成功的promise，所以用try catch捕获错误
            try {
                const { data: { menuList, token, user: { username, roles } } } = await loginApi(loginForm)
                this.token = token
                this.roles = roles
                this.menu = menuList
                this.username = username
                console.log(roles,123)
                sessionStorage.setItem('token', token)
                sessionStorage.setItem('username', username)
                sessionStorage.setItem('roles', JSON.stringify(roles))
                sessionStorage.setItem('menu', JSON.stringify(menuList))
                // router.push('/') router只能在组件中使用

            } catch (error) {
                console.log('catch', error)
            }
        }
    }
})

export default useUserStore