const nodemailer = require('nodemailer')

exports.handler = async function (event, context) {
  const userName = event.queryStringParameters.userName
  const userEmail = event.queryStringParameters.userEmail

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'portfoliouser1991', // generated ethereal user
      pass: 'amjbjeztkgfbqtqw',
    },
  })

  // Step 2
  let mailOptions = {
    from: 'portfoliouser1991@gmail.com', // TODO: email sender
    to: 'markyto91@gmail.com', // TODO: email receiver
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
