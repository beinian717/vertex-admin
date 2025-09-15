import Mock from 'mockjs'

Mock.setup({
    timeout:'2000-6000'
})

// 管理员菜单
const menuList1=[
    {
        name:'数据看板',
        icon:'DataLine',
        url:'/dashboard',
    },
    {
        name:'组件中心',
        icon:'Postcard',
        url:'/component',
    },
    {
        name:'系统管理',
        icon:'System',
        url:'/system',
    },
]

// 用户菜单
const menuList2=[
    {
        name:'数据看板',
        icon:'DataLine',
        url:'/dashboard',
    },
    {
        name:'组件中心',
        icon:'Postcard',
        url:'/component',
    }
]

// 在请求发送到网络之前就返回了模拟数据，从而避免了实际的跨域请求被发送到服务器。
Mock.mock('https://www.vertex.com/login','post',(options:any)=>{
    console.log('options',options)
    const {username,password}=JSON.parse(options.body)

    if(username=='admin'&&password=='admin123'){
        return {
            code:200,
            message:'登录成功',
            data:{
                token:'admin-token4j3b4bxa23dss32dcx',
                user:{
                    username:'帝皇侠',
                    roles:['admin']
                },
                menuList:menuList1
            }
        }
    }else if(username=='user'&&password=='user123'){
        return {
            code:200,
            message:'登录成功',
            data:{
                token:'user-tokenj4k3nkj443u4rion11f',
                user:{
                    username:'炎龙侠',
                    roles:['user']
                },
                menuList:menuList2
            }
        }
    }else{
        return {
            code:400,
            message:'登录失败,用户名或密码错误',
            data:{}
        }
    }
})
