//Step 1: Including neccessary modules 

const nodemailer = require('nodemailer'); /*Nodemailer is a module required for sending emails.
 If you haven't installed it already, go back to the 'Module required' and install it before running this program*/
const xoauth2 = require('xoauth2'); /*xoauth2 module is required when the authentication mode used is OAuth2, 
You can learn more about it here: https://oauth.net/2/ */


// Step 2: Creating a transporter method 
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '465', 
    auth: {
          type: 'OAuth2', //Authentication type
          user: 'your_email@service.com', //For example, aakanksha.jain8@gmail.com
          /* For learning how to know your client id, client secret and refresh token, refer to 
          section "Getting credentials for OAuth2"*/
          clientId: 'Your_ClientID',
          clientSecret: 'Client_Secret',
          refreshToken: 'Refresh_Token'    }
        
    } 
);

//Step 3: Defining mails options, like, to, from, content etc
let mailOptions = {
    from: 'your_email@service.com', // sender service here would be gmail, as specified in line 11
    to: 'receiver_email@service.com',
    subject: 'This is subject',
    text: 'This is email content'
    };
 
/* Note: You can add more fields in step 3, to know which field can be added, 
refer here: http://nodemailer.com/message/ */
      
//Step 4: finally, sendMail method , e = error message, otherwise sent log will be displayed 
transporter.sendMail(mailOptions, function(e, r) {
  if (e) {
    console.log(e);
  } else {
    console.log(r);
  }
  transporter.close();
});

