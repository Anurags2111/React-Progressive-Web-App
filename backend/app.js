const path = require('path');
const express = require('express');
const sendGridTransport = require('nodemailer-sendgrid-transport');
 
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors')
app.use(cors())
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath)); 
 
app.post('/email-users',(req,res)=>{

    const transporter = nodemailer.createTransport(sendGridTransport({
        auth:{
        api_key: 'YOUR_API_KEY'
        }
        }))
 
    const mailOptions = {
        from: 'anurag.sharma@dogratech.com',
        to: req.body.enteredEmail,
        subject: "Email Verification Code",
        text:"Email Verification Code",
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>Email Verification Code</p>
        <h3>${Math.floor(1000 + Math.random() * 9000)}</h3>
        <ul>
            <li>Email: ${req.body.enteredEmail}</li>
        </ul>
        `
    };
     
    transporter.sendMail(mailOptions, (error, info) => {
        if (error)
        {
          res.json({status: true, responseMessage: 'ERROR'})
        } 
        else
        {
          res.json({status: true, responseMessage: 'Email Sent Successfully'})
        }
     
      });
});
 

app.listen(8000, () => {
    console.log('Server is running on port 8000.');
  });