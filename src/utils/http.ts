import service from './request'

interface ResponseData{
    code:number,
    msg:string,
    data:any
}

// 封装get请求
function get(url:string,params?:any):Promise<ResponseData>{
    return service.get(url,{params})
}

// 封装post请求
function post(url:string,data?:any):Promise<ResponseData>{
    return service.post(url,data)
}
export {
    get,
    post
}