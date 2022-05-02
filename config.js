const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    url: process.env.URL_CONNECTION,
    port: process.env.PORT || 5000
}