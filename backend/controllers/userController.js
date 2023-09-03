const User = require('../models/userModel')
const bcrypt = require("bcryptjs");

exports.addUser = async (req, res) => {
  const { email, password, userType, userName } = { email: req.body.email, password: req.body.Password, userType: req.body.Role, userName: req.body.username };
  if (!email || !password || !userType || !userName) {
    res.status(400).json({ error: "Missing Parameters" })
    return;
  }
  const isExist = await User.findOne({ email: email });
  if (isExist) {
    res.status(400).json({ error: "Already Exist" });
    return;
  }

  const reg = async () => {
    try {
      const encryptedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        email,
        userName,
        password: encryptedPassword,
        userType,
      });

      res.send({
        message: "User saved successfully.",
        data: newUser
      });
      return;

    } catch (error) {
      console.log("Error == ", error);
      res.json({ error: error });
    }
  }
  reg()
}

exports.updateUser = (req, res) => {
  console.log(req.body)
  User.findByIdAndUpdate(
    req.body["_id"],
    {
      email: req.body.email,
      password: req.body.password,
      userName: req.body.userName,
      userType: req.body.userType,
    }).exec()
}

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.body[0]['_id']).exec()
}

exports.getUser = (req, res) => {
  User.find({ userType: 'user' }).then(data => res.json(data))
}