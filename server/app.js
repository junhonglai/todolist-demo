;(async function () {
    // 引入express
    const express = require('express')
    // 引入路由
    const router = require('./router/router')
    // 引入跨域资源共享
    const cors = require('cors')
    // 引入连接数据库的js文件，在数据库连接成功后执行下面的代码
    await require('./db/dbConnect')
    console.log('数据库连接成功')
    // 创建应用对象
    const app = express()
    // 使用中间件解析请求体数据
    app.use(express.urlencoded({ extended: true }))
    // 使用中间件解决跨域
    app.use(cors())
    // 将路由对象挂起
    app.use(router)
    // 设置端口号并启动服务器
    app.listen(3000, (err) => {
        if (err) console.log('服务器启动失败')
        else console.log('服务器启动成功')
    })
})()