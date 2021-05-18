// 引入mongoose
const mongoose = require('mongoose')
// 创建Shema约束
const Schema = mongoose.Schema
// 创建约束规则
const todoSchema = new Schema({
    todoName:{
        type:String,
        required:true,
        unique:true
    },
    isDone:{
        type:Boolean,
        required:true,
        default:false
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
// 创建model集合
const todoModel = mongoose.model('todos',todoSchema)
// 导出model
module.exports = todoModel