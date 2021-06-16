var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pawankhampar@gmail.com',
    pass: 'pawankhampar'
  }
});

module.exports=transporter