// 封装post请求
 function myPost(options) {
    return new Promise((res, rej) => {
        let { url, data } = options
        // 创建异步请求对象
        const xhr = new XMLHttpRequest()
        // 设置请求方式，和设置请求头
        xhr.open('post', url)
        // 设置请求体格式
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
        // 发送请求
        xhr.send(getData(data))
        // 判断请求状态
        xhr.onreadystatechange =async function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
               await res(JSON.parse(xhr.responseText))
            }
        }
    })
}

// 封装函数对发送的数据进行处理
function getData(obj) {
    let dataArr = []
    // 遍历对象
    for (const key in obj) {
        dataArr.push(`${key}=${obj[key]}`)
    }
    return dataArr.join('&')
}