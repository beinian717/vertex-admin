const TOKEN_KEY='token'

const isLogin=()=>{
    // !!是两个逻辑非运算符的组合，可以将任何“假值（null、undefined、0、''）”转换为 false
    return !!localStorage.getItem(TOKEN_KEY)
}

const getToken=()=>{
    return localStorage.getItem(TOKEN_KEY)
}

const setToken=(token:string)=>{
    localStorage.setItem(TOKEN_KEY,token)
}

const clearToken=()=>{
    localStorage.removeItem(TOKEN_KEY)
}

export {
    isLogin,
    getToken,
    setToken,
    clearToken
}