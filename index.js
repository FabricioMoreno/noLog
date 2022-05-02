const express = require('express')
const app = express()
const path = require('path')
const connectDB = require('./db/connection')
//Load enviroment variables
const {url,port} = require('./config')

const log = require('./routes/log')

app.use(express.json())
app.use('/api/v1',log)
app.use(express.static(path.join(__dirname,'/client/build')))



const start = async () =>{
    try {
        await connectDB(url)
        console.log('here')
        
    } catch (err) {
        console.log(err)        
    }

}


app.listen(port, start)