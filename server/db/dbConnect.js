// 引入mongoose
const mongoose = require('mongoose')
// 连接数据库
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/todolis', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    // .then(() => console.log('Database Connected'))
    // .catch(err => console.log(err));