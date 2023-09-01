const express = require ('express');
const router = express.Router()
const {getSuccessLeads,postSuccessLeads} = require('../controllers/successLeadsController')

router.get('/success-api',getSuccessLeads)
router.post('/success-api',postSuccessLeads)

module.exports = router