import { post } from "@/utils/http";

enum LoginApi{
    Login='/login'
}

interface LoginData{
    username:string,
    password:string
}

// 使用any的原因是因为返回值的类型已经在post封装中定义好了，此处不需要再次声明类型
function loginApi (data:LoginData):Promise<any>{
    return post(LoginApi.Login,data)
}

export {
    loginApi
}