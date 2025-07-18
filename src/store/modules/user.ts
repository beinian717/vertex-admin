import { defineStore } from "pinia";
import { LoginData,login as userLogin } from "@/api/user";
import { setToken } from "@/utils/auth";

const useUserStore=defineStore('user',{
    
    actions:{
        async login(loginForm:LoginData){
            const res=await userLogin(loginForm)
            setToken(res.data.token)
        }
    }
})

export default useUserStore