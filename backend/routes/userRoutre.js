const express = require ('express');
const router = express.Router()
const {addUser,updateUser,deleteUser,getUser} = require('../controllers/userController')

router.post('/add-user',addUser)
router.post('/update-user',updateUser)
router.post('/delete-user',deleteUser)
router.get('/user-details',getUser)

module.exports = router