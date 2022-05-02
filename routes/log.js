const express = require('express')
const router = express.Router()
const {getLog,createLog,getAllLogs} = require('../controllers/log')

router.route('/logs/:id').get(getLog)
router.route('/logs').get(getAllLogs).patch(createLog)

module.exports = router