export const successResponseWrap=(data:unknown)=>{
    return {
        data,
        status:'ok',
        msg:'请求成功',
        code:200
    }
}

// unknown：当前变量类型未知，但会在使用变量之前进行类型检查
export const failResponseWrap=(data:unknown,msg:string,code=500)=>{
    return {
        data,
        status:'fail',
        msg,
        code
    }
}