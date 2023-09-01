const mongoose = require('mongoose');

const UserDetailsScehma = new mongoose.Schema(
    {
      email: { type: String,required: true },
      password: { type: String,required: true },
      userName:{ type: String,required: true },
      userType: { type: String,required: true },
    },
  );
  const User = mongoose.model("UserInfo",UserDetailsScehma);

  module.exports = User