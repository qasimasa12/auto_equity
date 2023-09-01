const express = require ('express');
const router = express.Router()
const {getRejectedLeads,postRejectedLeads} = require('../controllers/rejectedLeadsController')

router.get('/rejected-api',getRejectedLeads)
router.post('/rejected-api',postRejectedLeads)


module.exports = router