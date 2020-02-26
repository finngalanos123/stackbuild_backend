const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

// creates reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.NODEMAILER_USER, // generated ethereal user
        pass: process.env.NODEMAILER_PASS // generated ethereal password
    }
});

let tempToken = jwt.sign({
    email: process.env.NODEMAILER_EMAIL,
}, 'secretkey', {expiresIn: '1h'});

let randomCode = Math.floor(100000 + Math.random() * 900000);

// setup email data with unicode symbols
let confirmationCodeMailOptions = {
    from: '"Kimbocorp " <foo@example.com>', // sender address
    to: process.env.NODEMAILER_EMAIL, // list of receivers
    subject: `Kimbocorp confirmation code: ${randomCode}`, // Subject line
    text: 'Kimbocorp confirmation code', // plain text body
    html: `<h1 style="color:#747474a3">Confirmation code</h1>
           <b>It's time to confirm your email address. Please enter the following code in your browser window.</b>
           <div style="border:1px solid silver;width:500px;height:50px;text-align: center"><h1 style="color:#407096">${randomCode}</h1></div>
           <p>Enter the code soon, as it will expire shortly.</p>
           <p>— Team Kimbocorp</p>` // html body
};


module.exports = {transporter, confirmationCodeMailOptions};
