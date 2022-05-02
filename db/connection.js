const moongose = require('mongoose')

const connectDB = (url) => {
    return moongose.connect(url,{
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB