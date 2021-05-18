// 引入model
const todoModel = require('./model')
// 查找
function findAll() {
    // 因为操作数据库地函数都是异步的，不写回调的话返回一个promise对象
    return todoModel.find()
}
// 添加
function addTodo(todoName) {
    return todoModel.create({ todoName })
}
// 更新
function updateTodo(ids, isDone) {
    return todoModel.updateMany({ _id: { $in: ids } }, {
        $set: { isDone }
    })
}
// 删除
function deleteTodo(ids) {
    return todoModel.deleteMany({ _id: { $in: ids } })
}
module.exports.findAll = findAll
module.exports.addTodo = addTodo
module.exports.updateTodo = updateTodo
module.exports.deleteTodo = deleteTodo