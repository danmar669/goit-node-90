const nodemailer = require('nodemailer')

const { EMAIL_API_USER, EMAIL_API_PASSWORD } = process.env

async function sendMail({to, subject, html, text = ''}) {
    const email = {
        from: "info@bookclub.com",
        to,
        subject,
        html,
        text
    }

    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: EMAIL_API_USER,
            pass: EMAIL_API_PASSWORD,
        },
    });

    await transport.sendMail(email)

}

module.exports = sendMail