const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs");


exports.resetPassword = async(req,res)=>{
    const JWT_SECRET = process.env.PASSWORD_RESET_SECRET
    const {id,token} = req.params
    const user = await User.findById(id).exec()
    if(!user){
        res.send("Invalid Id")
        return
    }

    const secret = JWT_SECRET + user.password
    try {
        const payload = jwt.verify(token, secret)
        res.redirect(`http://16.171.38.251/api/reset-password/${id}/${token}`)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

exports.postResetPassword = async(req,res)=>{
    const {id,token} = req.params
    const {password} = req.body
    const JWT_SECRET = process.env.PASSWORD_RESET_SECRET
    let user = await User.findById(id)
    console.log(user.password)
    if(!user){
        res.send("Invalid Id")
        return
    }
    const secret = JWT_SECRET + user.password
    try {
        const payload = jwt.verify(token, secret)
        const encryptedPassword = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate(id, { password: encryptedPassword })
        res.redirect("http://16.171.38.251/")
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }

}
