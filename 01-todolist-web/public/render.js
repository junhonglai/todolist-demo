// 获取元素
const tip = document.getElementById('tip')
const container = document.getElementById('container')
const todo_main = document.querySelector('.todo-main')
const todo_footer = document.querySelector('.todo-footer')
let allChecked
let inputs
let removeBtn
let deletDoneBtn

// 渲染container和底部
function fn(todolist) {
    // console.log(todolist)
    render(todolist)
}

// 封装一个渲染函数，每次列表发生变化时调用
function render(todolist) {
    // 先判断后台有没数据，没有就显示：恭喜你，没有任务!
    // 渲染container
    if (todolist.length === 0) {
        tip.style.display = 'block'
        container.style.display = 'none'
        return
    } else {
        tip.style.display = 'none'
        container.style.display = 'block'
    }
    // 遍历todolist,渲染container
    // console.log(todolist);
    let todoArr = todolist.reduce((pre, item, index) => {
        // console.log(typeof pre)
        pre.push(
            `
             <li>
                 <label>
                   <input type="checkbox" ${item.isDone ? 'checked' : ''} id="${item._id}"/>
                   <span ${item.isDone ? 'class="done"' : ''}>${item.todoName}</span>
                 </label>
                 <button class="btn btn-danger" data-ID="${item._id}">删除</button>
             </li>`)
        return pre
    }, [])
    // 获取全部的任务
    const totalCount = todolist.length
    // 获取完成数
    const doneCount = getDoneNum(todolist)
    // 渲染底部
    const footerStr = `
     <label>
        <input type="checkbox" ${totalCount === doneCount ? 'checked' : ''} />
     </label>
     <span> <span>已完成${doneCount}</span> / 全部${totalCount} </span>
     <button class="btn btn-danger">清除已完成任务</button>
    `
    // 渲染底部
    todo_footer.innerHTML = footerStr
    // 渲染container
    todo_main.innerHTML = todoArr.join('')
    // 获取元素
    allChecked = document.querySelector('.todo-footer input')
    // 获取所有的input
    inputs = document.querySelectorAll('.todo-main input')
    // 获取所有任务列表的删除按钮
    removeBtn = document.querySelectorAll('.todo-main li button')
    // 获取删除已完成项按钮
    deletDoneBtn = document.querySelector('.todo-footer button')
    // 绑定点击事件
    // allChecked.onclick = e => isAllChecked(todolist, e)
    allChecked.onclick = isAllChecked
    // 复选框点击事件
    todo_main.onclick = inputChecked
    // 列表删除事件
    todo_main.addEventListener('click', removeList)
    // 已完成项删除
    deletDoneBtn.onclick = deletDone
}

// 封装函数获取完成的任务
// function getDoneNum(todolist) {
//     let doneNum = 0
//     todolist.forEach(item => {
//         if (item.isDone === true) {
//             doneNum++
//         }
//     })
//     return doneNum
// }
// // 绑定点击事件
// async function isAllChecked() {
//     // 获取所有的input
//     // const inputs = document.querySelectorAll('.todo-main input')
//     // console.log(todolist, '~~~')
//     console.log(inputs);
//     const checked = this.checked
//     let ids = []
//     Array.from(inputs).forEach((item) => {
//         ids.push(item.id)
//     })
//     // 当全选框选中时，更新数据库
//     if (checked) {
//         console.log(ids);
//         const todolist = await myPost({
//             url: 'http://127.0.0.1:3000/updatetodo',
//             data: {
//                 isDone: checked,
//                 ids: JSON.stringify(ids)
//             }
//         })
//         render(todolist)
//         // console.log(todolist);

//     } else {
//         const todolist = await myPost({
//             url: 'http://127.0.0.1:3000/updatetodo',
//             data: {
//                 isDone: checked,
//                 ids: JSON.stringify(ids)
//             }
//         })
//         render(todolist)
//     }

// }