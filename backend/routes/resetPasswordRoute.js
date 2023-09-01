const express = require('express')
const router = express.Router()
const {resetPassword,postResetPassword} = require('../controllers/resetPassword')

router.get('/reset-password/:id/:token',resetPassword)
router.post('/reset-password/:id/:token',postResetPassword)



module.exports= router