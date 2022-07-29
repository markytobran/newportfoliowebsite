const nodemailer = require('nodemailer')

exports.handler = async function (event, context) {
  const userName = event.queryStringParameters.userName
  const userEmail = event.queryStringParameters.userEmail

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_APP_USERNAME, // generated ethereal user
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  // Step 2
  let mailOptions = {
    from: process.env.GMAIL_APP_FROM_EMAIL_ADDRESS, // TODO: email sender
    to: process.env.GMAIL_APP_TO_EMAIL_ADDRESS, // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: `Name: ${userName}, Email: ${userEmail}`,
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err)
      return console.log('Error occurs')
    }
    return console.log('Email sent!!!')
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'All done' }),
  }
}
