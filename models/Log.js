const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    content: String
},{timestamps: true})

const EXPIRATION_TIME = 75
logSchema.index({createdAt: 1},{expireAfterSeconds: EXPIRATION_TIME});

module.exports = mongoose.model('log',logSchema)