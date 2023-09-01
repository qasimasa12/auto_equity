const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const mail = require('@sendgrid/mail');
require('dotenv').config()

exports.forgotPassword= async(req,res)=>{

    const JWT_SECRET = process.env.PASSWORD_RESET_SECRET

    let user = await User.findOne({ email: req.body.email });
		if (!user){
			    res
				.status(409)
				.send({ message: "User with given email does not exist!" });
        }else{
            res
			.status(200)
			.send({ message: "Password reset link sent to your email account" });
        }
        const secret = JWT_SECRET + user.password
        const payload = {
            email:user.email,
            id:user['_id']
        }
        const token = jwt.sign(payload, secret,{expiresIn:'15m'})
        const link = `http://16.171.38.251/reset-password/${user['_id']}/${token}`

        mail.setApiKey(process.env.MAIL_API_KEY);
        const message = `
          Subject:${"Reset Password Link"}\r\n
          Message: ${link}
        `;

        await mail.send({
          to: `${user.email}`,
          from: 'mdalaa7911@gmail.com',
          subject: 'Reset Password',
          text: message,
          html: message.replace(/\r\n/g, '<br>'),
        });
}
