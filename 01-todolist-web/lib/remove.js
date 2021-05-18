// 封装单个列表任务删除函数
async function removeList(e) {
    if (e.target.className === 'btn btn-danger') {
        // console.log(1);
        // 获取id
        let id = [e.target.getAttribute('data-ID')]
        // console.log(id);
        // 发送请求
        const todolist = await myPost({
            url: 'http://127.0.0.1:3000/deletetodo',
            data: {
                ids: JSON.stringify(id)
            }
        })
        render(todolist)
    }
}

// 封装删除已完成项
async function deletDone() {
    // console.log(1);
    // 获取所有的已选中任务的id，遍历所有input
    let ids = []
    Array.from(inputs).forEach((item) => {
        if (item.checked) {
            ids.push(item.id)
        }
    })
    // 发送请求
    const todolist = await myPost({
        url: 'http://127.0.0.1:3000/deletetodo',
        data: {
            ids: JSON.stringify(ids)
        }
    })
    // 渲染页面
    render(todolist)

}