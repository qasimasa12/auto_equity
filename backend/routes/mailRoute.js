const express = require ('express');
const router = express.Router()
const {sendMail} = require('../controllers/mailController')

router.post('/mail-api',sendMail)

module.exports = router