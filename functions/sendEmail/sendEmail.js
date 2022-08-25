const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

exports.handler = async function (event, context) {
  const { name, email, subject, message } = JSON.parse(event.body)

  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_APP_USERNAME,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })
  )

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_APP_FROM_EMAIL_ADDRESS,
      to: process.env.GMAIL_APP_TO_EMAIL_ADDRESS,
      subject: subject,
      text: `Name: ${name}, Email: ${email}, Message: ${message}`,
    })
  } catch (error) {
    console.log(error)
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'All done' }),
  }
}
