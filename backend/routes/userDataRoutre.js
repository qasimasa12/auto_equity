const express = require ('express');
const router = express.Router()
const {userData} = require('../controllers/userDataController')


router.post("/userData",userData)


module.exports = router