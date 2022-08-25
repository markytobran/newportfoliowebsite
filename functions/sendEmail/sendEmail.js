const nodemailer = require('nodemailer')

exports.handler = async function (event, context) {
  const { name, email, subject, message } = JSON.parse(event.body)

  //create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_APP_USERNAME,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
  let mailOptions = {
    from: process.env.GMAIL_APP_FROM_EMAIL_ADDRESS,
    to: process.env.GMAIL_APP_TO_EMAIL_ADDRESS,
    subject: subject,
    text: `Name: ${name}, Email: ${email}
          ${message}`,
  }
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return console.log('Error occurs')
    }
    return console.log('Email sent!!!')
  })
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'All done' }),
  }
}
