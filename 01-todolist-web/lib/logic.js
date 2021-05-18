// 创建script标签
const script = document.createElement('script')
// 给script标签添加src属性
script.src = 'http://127.0.0.1:3000/findtodo?callback=fn'
// 把script标签添加至body中
document.body.appendChild(script)

// 封装函数获取完成的任务
function getDoneNum(todolist) {
    let doneNum = 0
    todolist.forEach(item => {
        if (item.isDone === true) {
            doneNum++
        }
    })
    return doneNum
}
