// 获取输入框元素
const addInput = document.querySelector('.todo-header input')
// 给元素绑定键盘抬起事件
addInput.onkeyup = async function (e) {
    // 获取输入框的输入内容
    const value = addInput.value.trim()
    // 如果有重名任务，直接清空输入框
    const allName = document.querySelectorAll('.todo-main label span')
    // console.log(allName);
    const reName = Array.from(allName).some(item => {
        return item.innerHTML === value
    })
    if (reName) {
        alert('已存在该任务')
        addInput.value = ''
        return
    }else if (!value) {
        addInput.value = ''
        return
    }
    // 当按下回车键时，发送ajax请求
    if (e.keyCode === 13) {
        // console.log(1);
        const todolist = await myPost({
            url: 'http://127.0.0.1:3000/addtodo',
            data: {
                todoName: value
            }
        })
        addInput.value = ''
        render(todolist)
    }
}