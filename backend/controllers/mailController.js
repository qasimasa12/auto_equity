const mail = require('@sendgrid/mail');
require('dotenv').config()
exports.sendMail = async(req, res) => {

    mail.setApiKey(process.env.MAIL_API_KEY);
      console.log(req.body.leadsAvalible.FIRST_NAME +" "+ req.body.leadsAvalible.LAST_NAME)
      const message = `
        Name: ${req.body.leadsAvalible.FIRST_NAME +" "+ req.body.leadsAvalible.LAST_NAME}\r\n
        Email: ${req.body.leadsAvalible.email}\r\n
        Subject:${"Auto Equity HUB"}\r\n
        Message: ${req.body.formData.text || "No Message"}
      `;
    
      await mail.send({
        to: 'mdalaa7911@gmail.com',
        from: 'mdalaa7911@gmail.com',
        subject: 'New Message!',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
      });
    
      res.status(200).json({ status: 'Ok' });
  }