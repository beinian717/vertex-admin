import {successResponseWrap,failResponseWrap} from '@/utils/setup-mock'
import Mock from 'mockjs'
import {isLogin} from '@/utils/auth'

// 用户信息
Mock.mock(new RegExp('/api/user/info'),()=>{
    if(isLogin()){
        return successResponseWrap({
            name:'帝皇俠',
            location:'beijing',
            job:'frontend'
        })
    }
    return failResponseWrap(null,'登录失败')
})

// 登录
Mock.mock(new RegExp('api/user/login'),(params)=>{
    const {username,password}=JSON.parse(params.body);
    if(!username){
        return failResponseWrap(null,'用户名不能为空')
    }
    if(!password){
        return failResponseWrap(null,'密码不能为空')
    }
    if(username=='admin'&&password=='admin'){
        localStorage.setItem('userInfo','user')
        return successResponseWrap({
            token:'12345-'
        })
    }
})