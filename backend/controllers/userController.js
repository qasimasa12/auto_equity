const User = require('../models/userModel')
const bcrypt = require("bcryptjs");

exports.addUser = (req,res)=>{
    console.log(req.body)
  
    const { email, password, userType,userName} = {email:req.body.email,password:req.body.Password,userType:req.body.Role,userName:req.body.username};
    const reg = async()=>{
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
      await User.create({
        email,
        userName,
        password: encryptedPassword,
        userType,
      });
  
    } catch (error) {
      console.log(error);
      res.json(error)
    }
  }
  reg()
  }

exports.updateUser = (req,res)=>{
    console.log(req.body)
  User.findByIdAndUpdate(
    req.body["_id"],
    {email: req.body.email ,
      password: req.body.password,
      userName: req.body.userName ,
      userType: req.body.userType,
   }).exec()
  }

  exports.deleteUser = (req,res)=>{
    User.findByIdAndDelete(req.body[0]['_id']).exec()
    }

exports.getUser = (req,res)=>{
    User.find({userType:'user'}).then(data=>res.json(data))
  }