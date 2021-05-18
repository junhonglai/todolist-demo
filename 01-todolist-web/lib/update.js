// 获取元素
// const allChecked = document.querySelector('.todo-footer label input')
// 绑定点击事件，全选框
async function isAllChecked() {
    // console.log(1);
    const checked = allChecked.checked
    // 当全选框选中时，更新数据库
    // 遍历所有复选框，拿到id
    const ids = []
    Array.from(inputs).forEach((item) => {
        ids.push(item.id)
    })
    // 获取所有的input
    // const inputs = document.querySelectorAll('.todo-main input')
    if (checked) {
        const todolist = await myPost({
            url: 'http://127.0.0.1:3000/updatetodo',
            data: {
                isDone: checked,
                // 传入ids时后台会自动将其转换为字符串，因此【】会没有，需要先转换为JSON字符串
                ids: JSON.stringify(ids)
            }
        })
        // console.log(pre)
        // 重新渲染页面
        render(todolist)
    } else {
        const todolist = await myPost({
            url: 'http://127.0.0.1:3000/updatetodo',
            data: {
                isDone: checked,
                // 传入ids时后台会自动将其转换为字符串，因此【】会没有，需要先转换为JSON字符串
                ids: JSON.stringify(ids)
            }
        })
         // 重新渲染页面
        render(todolist)
    }
}
// 复选框点击事件
async function inputChecked(e) {
    // 判断目标元素是否是input输入框
    if (e.target.getAttribute('type') === 'checkbox') {
        // 获取id(需要的是一个数组)
        const ids = [e.target.id]
        // 获取点击后其是否选中
        const checked = e.target.checked
        // console.log(ids, checked);
        // 发送post请求
        const todolist = await myPost({
            url: 'http://127.0.0.1:3000/updatetodo',
            data: {
                isDone: checked,
                // 传入ids时后台会自动将其转换为字符串，因此【】会没有，需要先转换为JSON字符串
                ids: JSON.stringify(ids)
            }
        })
        render(todolist)
    }
}