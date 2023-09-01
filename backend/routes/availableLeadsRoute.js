const express = require ('express');
const router = express.Router()
const {availableLeads} = require('../controllers/availableLeadsController')

router.get('/available-leads-api',availableLeads)

module.exports = router