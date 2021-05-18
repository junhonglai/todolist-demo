// 引入express
const express = require('express')
// 引入增删改查的方法
const { findAll, addTodo, updateTodo, deleteTodo } = require('../db/crud')
// 使用路由中间件
const router = express.Router()

// 配置查找数据的路由
router.get('/findtodo', async (req, res) => {
    let todolist = await findAll()
    todolist = JSON.stringify(todolist)
    let { callback } = req.query
    let re = `${callback}(${todolist})`
    res.send(re)
})
// 添加数据的路由
router.post('/addtodo', async (req, res) => {
    const { todoName } = req.body
    // console.log(todoName);
    await addTodo(todoName)
    let re = await findAll()
    res.send(re)
})
// 配置更新数据的路由、
router.post('/updatetodo', async (req, res) => {
    let { ids, isDone } = req.body
    // console.log(req.body);
    ids = JSON.parse(ids)
    // console.log(typeof ids, typeof isDone)
    await updateTodo(ids, isDone)
    let re = await findAll()
    res.send(re)
})
// 配置删除数据的路由、
router.post('/deletetodo', async (req, res) => {
    let { ids } = req.body
    ids = JSON.parse(ids)
    console.log(ids)
    await deleteTodo(ids)
    let re = await findAll()
    res.send(re)
})
// 导出路由对象
module.exports = router