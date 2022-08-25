const nodemailer = require('nodemailer')

exports.handler = async function (event, context) {
  const { name, email, subject, message } = JSON.parse(event.body)

  //create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
      user: 'portfoliouser1991',
      pass: 'amjbjeztkgfbqtqw',
    },
  })
  let mailOptions = {
    from: 'portfoliouser1991@gmail.com',
    to: 'markyto91@gmail.com',
    subject: subject,
    text: `Name: ${name}, Email: ${email}, Message: ${message}`,
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
