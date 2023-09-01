const {forgotPassword} = require('../controllers/forgotPasswordController')
const express = require ('express');
const router = express.Router()


router.post('/forgot-password',forgotPassword)

module.exports = router